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
import LecturesList from '../pages/LecturesList';
import CourseModulesList from '../pages/CourseModulesList';
import Welcome from '../pages/Welcome';
import Panel from '../pages/Panel';

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
        <Route path="/painel-aulas" exact element={<LecturesList />} />
        <Route path="/painel-modulos" exact element={<CourseModulesList />} />
        <Route path="/painel" exact element={<Panel />} />
      </Route>
      <Route path="/welcome" exact element={<Welcome />} />
      {/* <Route path="*" exact element={<h1> Página não encontrada 404</h1>} /> */}
    </Routes>
  </BrowserRouter>
);
PrivateRoutes.propTypes = {
  children: PropTypes.any,
  redirect: PropTypes.string,
}.isRequired;
export default Router;
