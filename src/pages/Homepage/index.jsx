import React from 'react';
import Wrapper from './styles';
import Modules from '../../components/Modules';
import Classes from '../../components/Classes';
import { CourseModulesProvider } from '../../context/CourseModulesContext';

const Homepage = () => (
  <Wrapper>
    <CourseModulesProvider>
      <Modules />
      <Classes />
    </CourseModulesProvider>
  </Wrapper>
);
export default Homepage;
