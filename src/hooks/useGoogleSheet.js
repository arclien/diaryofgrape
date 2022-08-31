import { useState, useCallback } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';

import { getTodayDate } from 'utils/day';
import {
  SHEET_DOC_ID,
  SHEET_ID,
  GOOGLE_SERVICE_CLIENT_EMAIL,
  GOOGLE_SERVICE_PRIVATE_KEY,
} from '../constants/googlesheet';

const CACHE = {
  mapData: null,
  googleSheet: {
    doc: new GoogleSpreadsheet(SHEET_DOC_ID),
    sheet: null,
    rows: null,
  },
};

export default function useGoogleSheet() {
  const [sheetMapData, setSheetMapData] = useState([]);

  const addNewMapDataToSheet = useCallback(async (placeInfo) => {
    const addedRows = [
      {
        ...placeInfo,
      },
    ];
    if (CACHE?.googleSheet?.sheet && addedRows.length > 0) {
      return CACHE?.googleSheet?.sheet?.addRows(addedRows);
    }
    return false;
  }, []);

  const addCheckInDataToSheet = useCallback(
    async (userEmail, { name, kakaoId }, { drink, food, tag, user, note }) => {
      const { doc } = CACHE?.googleSheet;
      let sheet = doc.sheetsByTitle[userEmail]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
      if (!sheet) {
        sheet = await doc.addSheet({ title: userEmail });
      }
      const addedRows = [
        {
          name,
          kakaoId,
          timestamp: getTodayDate('YY-MM-DD'),
          drink,
          food,
          tag,
          user,
          note,
        },
      ];
      if (sheet && addedRows.length > 0) {
        return sheet.addRows(addedRows);
      }
      return false;
    },
    []
  );

  const getGoogleSheetMapData = useCallback(async () => {
    if (CACHE?.mapData && CACHE?.googleSheet.sheet) return CACHE?.mapData;

    const { doc } = CACHE?.googleSheet;
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_SERVICE_CLIENT_EMAIL || '',
      private_key: GOOGLE_SERVICE_PRIVATE_KEY || '',
    });

    await doc.loadInfo(); // loads document properties and worksheets
    const sheetObj = doc.sheetsById[SHEET_ID];

    if (!sheetObj) return;
    const rowsObj = await sheetObj.getRows();
    CACHE.googleSheet = {
      ...CACHE?.googleSheet,
      sheet: sheetObj,
      rows: rowsObj,
    };

    const mapData = CACHE.googleSheet.rows.map(
      ({
        address,
        drink,
        food,
        category,
        service,
        parking,
        place,
        user,
        timestamp,
        kakaoId,
        latitude,
        longitude,
        name,
        naverId,
        phone,
        url,
      }) => {
        return {
          address,
          drink,
          food,
          category,
          service,
          parking,
          place,
          user,
          timestamp,
          kakaoId,
          latitude,
          longitude,
          name,
          naverId,
          phone,
          url,
        };
      }
    );

    CACHE.mapData = mapData;
    setSheetMapData(mapData);

    return mapData;
  }, []);

  const checkExistPlace = (kakaoId) =>
    CACHE.mapData.find((mapData) => mapData.kakaoId === kakaoId);

  return {
    sheetMapData,
    getGoogleSheetMapData,
    addNewMapDataToSheet,
    addCheckInDataToSheet,
    checkExistPlace,
  };
}
