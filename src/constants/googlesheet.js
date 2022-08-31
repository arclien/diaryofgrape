// google sheet의 production은 실제로는 global-monito-alpha에서 작업을 해야해서, node_env가 production(서버에 배포시)로 정했으며,
// 개발자가 로컬에서 작업을 할 때는 google sheet을 dev로 보게 했다.
const {
  REACT_APP_GOOGLE_DOC_ID,
  REACT_APP_GOOGLE_SHEET_ID,
  REACT_APP_GOOGLE_SERVICE_CLIENT_EMAIL,
  REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY,
} = process.env;
const SHEET_DOC_ID = REACT_APP_GOOGLE_DOC_ID || '';
const SHEET_ID = REACT_APP_GOOGLE_SHEET_ID || '';
const GOOGLE_SERVICE_CLIENT_EMAIL = REACT_APP_GOOGLE_SERVICE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const SHEET_COLUMN_KEY = {
  id: 'id',
  name: 'name',
  address: 'address',
  kakaoId: 'kakaoId',
  naverId: 'naverId',
  latitude: 'latitude',
  longitude: 'longitude',
  url: 'url',
};

export {
  SHEET_DOC_ID,
  SHEET_ID,
  SHEET_COLUMN_KEY,
  GOOGLE_SERVICE_CLIENT_EMAIL,
  GOOGLE_SERVICE_PRIVATE_KEY,
};
