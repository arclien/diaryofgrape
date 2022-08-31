import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header';

import { Container, Main } from './Layout.styles';

const LoadingPage = lazy(() => import('pages/LoadingPage/LoadingPage'));

const ErrorPage = () => {
  const Error = lazy(() => import('pages/ErrorPage/ErrorPage'));
  return (
    <Suspense fallback={<LoadingPage />}>
      <Error />
    </Suspense>
  );
};

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <Outlet />
        </ErrorBoundary>
      </Main>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeButton
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
    </Container>
  );
};

export default Layout;
