/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {
  Wrapper, CardTitle, Card, Cards, ClassesQuantity,
} from './styles';
import SectionTitle from '../SectionTitle';
import { CourseModulesContext } from '../../context/CourseModulesContext';

const Modules = () => {
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
              <ClassesQuantity>05 aulas</ClassesQuantity>
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

export default Modules;
