import React from 'react';
import ManageCourseModules from '../../components/ManageCourseModules';

import { CourseModulesProvider } from '../../context/CourseModulesContext';

const CourseModulesPage = () => (
  <CourseModulesProvider>
    <ManageCourseModules />
  </CourseModulesProvider>
);

export default CourseModulesPage;
