import React from 'react';
import ManageLectures from '../../components/ManageLectures';

import { CourseModulesProvider } from '../../context/CourseModulesContext';

const LecturesPage = () => (
  <CourseModulesProvider>
    <ManageLectures />
  </CourseModulesProvider>
);

export default LecturesPage;
