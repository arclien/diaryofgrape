import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalTheme } from 'remember-ui';

import GlobalConfirmModal from 'components/GlobalConfirmModal/GlobalConfirmModal';
import { ConfirmModalProvider } from 'context/ConfirmModalContext';
import GlobalHelmet from 'components/GlobalHelmet/GlobalHelmet';
import Router from 'router';

import { AppBody } from './App.styles';

const BASE_URL = '/diaryofgrape';

function App() {
  return (
    <ConfirmModalProvider>
      <GlobalHelmet />
      <BrowserRouter basename={BASE_URL}>
        <AppBody>
          <GlobalTheme />
          <Router />
        </AppBody>
        <GlobalConfirmModal />
      </BrowserRouter>
    </ConfirmModalProvider>
  );
}

export default App;
