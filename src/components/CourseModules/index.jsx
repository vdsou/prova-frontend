/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {
  Wrapper, CardTitle, Card, Cards, LecturesQuantity,
} from './styles';
import SectionTitle from '../SectionTitle';
import { CourseModulesContext } from '../../context/CourseModulesContext';

const CourseModules = () => {
  const { courseModulesList, setSelectedCourseModule } = useContext(CourseModulesContext);
  return (
    <Wrapper>
      <SectionTitle>Módulos</SectionTitle>
      <Cards>
        {courseModulesList
        && courseModulesList.map((item) => (
          <Card key={item._id} onClick={() => setSelectedCourseModule(item._id)}>
            <div>
              <CardTitle>{item.name}</CardTitle>
              <LecturesQuantity>05 aulas</LecturesQuantity>
            </div>
            <i>
              <FontAwesomeIcon icon={faGraduationCap} />
            </i>
          </Card>
        ))}
      </Cards>
    </Wrapper>
  );
};

export default CourseModules;
