import React from 'react';
import Wrapper from './styles';
import CourseModules from '../../components/CourseModules';
import Lectures from '../../components/Lectures';
import { CourseModulesProvider } from '../../context/CourseModulesContext';

const Homepage = () => (
  <Wrapper>
    <CourseModulesProvider>
      <CourseModules />
      <Lectures />
    </CourseModulesProvider>
  </Wrapper>
);
export default Homepage;
