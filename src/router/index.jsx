import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ManageClasses from '../pages/ManageClasses';
import ManageModules from '../pages/ManageModules';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/painel-aulas" element={<ManageClasses />} />
      <Route path="/painel-modulos" element={<ManageModules />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
