import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ROUTES from 'constants/routes.constant';
import Layout from 'pages/Layout/Layout';

const LoadingPage = lazy(() => import('pages/LoadingPage/LoadingPage'));

const HomePage = () => {
  const Home = lazy(() => import('pages/HomePage/HomePage'));
  return (
    <Suspense fallback={<LoadingPage />}>
      <Home />
    </Suspense>
  );
};

const ErrorPage = () => {
  const Error = lazy(() => import('pages/ErrorPage/ErrorPage'));
  return (
    <Suspense fallback={<LoadingPage />}>
      <Error />
    </Suspense>
  );
};

const Router = () => {
  const { root, loading, error } = ROUTES;
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={root.path} element={<HomePage />} />
        <Route path={loading.path} element={<LoadingPage />} />
        <Route path={error.path} element={<ErrorPage />} />
        <Route path="*" element={<Navigate to={error.path} />} />
      </Route>
    </Routes>
  );
};

export default Router;
