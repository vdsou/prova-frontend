/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import LecturesPage from '../pages/LecturesPage';
import CourseModulesPage from '../pages/CourseModulesPage';
import Welcome from '../pages/Welcome';
import ErrorMessage from '../components/ErrorMessage';

const PrivateRoutes = ({ children, redirect }) => {
  const storedToken = localStorage.getItem('token');
  return storedToken ? <Outlet /> : <Navigate to="/" />;
};

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/signin" exact element={<SignIn />} />
      <Route exact element={<PrivateRoutes />}>
        <Route path="/painel-aulas" exact element={<LecturesPage />} />
        <Route path="/painel-modulos" exact element={<CourseModulesPage />} />
      </Route>
      <Route path="/welcome" exact element={<Welcome />} />
      <Route path="*" exact element={<ErrorMessage> Página não encontrada 404</ErrorMessage>} />
    </Routes>
  </BrowserRouter>
);
PrivateRoutes.propTypes = {
  children: PropTypes.any,
  redirect: PropTypes.string,
}.isRequired;
export default Router;
