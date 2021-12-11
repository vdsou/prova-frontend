import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {
  Wrapper, CardTitle, Card, Cards, ClassesQuantity,
} from './styles';
import SectionTitle from '../SectionTitle';

const Modules = () => (
  <Wrapper>
    <SectionTitle>Módulos</SectionTitle>
    <Cards>
      <Card>
        <div>
          <CardTitle>Módulo</CardTitle>
          <ClassesQuantity>05 aulas</ClassesQuantity>
        </div>
        <i><FontAwesomeIcon icon={faGraduationCap} /></i>
      </Card>
      <Card>
        <div>
          <CardTitle>Módulo</CardTitle>
          <ClassesQuantity>05 aulas</ClassesQuantity>
        </div>
        <i><FontAwesomeIcon icon={faGraduationCap} /></i>
      </Card>
      <Card>
        <div>
          <CardTitle>Módulo</CardTitle>
          <ClassesQuantity>05 aulas</ClassesQuantity>
        </div>
        <i><FontAwesomeIcon icon={faGraduationCap} /></i>
      </Card>
      <Card>
        <div>
          <CardTitle>Módulo</CardTitle>
          <ClassesQuantity>05 aulas</ClassesQuantity>
        </div>
        <i><FontAwesomeIcon icon={faGraduationCap} /></i>
      </Card>
      <Card>
        <div>
          <CardTitle>Módulo</CardTitle>
          <ClassesQuantity>05 aulas</ClassesQuantity>
        </div>
        <i><FontAwesomeIcon icon={faGraduationCap} /></i>
      </Card>
      <Card>
        <div>
          <CardTitle>Módulo</CardTitle>
          <ClassesQuantity>05 aulas</ClassesQuantity>
        </div>
        <i><FontAwesomeIcon icon={faGraduationCap} /></i>
      </Card>
      <Card>
        <div>
          <CardTitle>Módulo</CardTitle>
          <ClassesQuantity>05 aulas</ClassesQuantity>
        </div>
        <i><FontAwesomeIcon icon={faGraduationCap} /></i>
      </Card>
    </Cards>
  </Wrapper>
);

export default Modules;
