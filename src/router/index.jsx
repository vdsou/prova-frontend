import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ManageClasses from '../pages/ManageClasses';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/painel-admin" element={<ManageClasses />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
