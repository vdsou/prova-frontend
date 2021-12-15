import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import LecturesList from '../pages/LecturesList';
import CourseModulesList from '../pages/CourseModulesList';
import Welcome from '../pages/Welcome';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/painel-aulas" element={<LecturesList />} />
      <Route path="/painel-modulos" element={<CourseModulesList />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
