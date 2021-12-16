/* eslint-disable dot-notation */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import FormWrapper from './styles';
import { CourseModulesContext } from '../../context/CourseModulesContext';

export default function EditCourseModule() {
  const { insertCourseModule, insertLecture, courseModulesList } = useContext(CourseModulesContext);
  const [courseModuleInput, setCourseModuleInput] = useState('');
  const initial = {
    name: '',
    courseModuleId: courseModulesList[0]._id,
    date: '',
    description: '',
    url: '',
  };
  const [newLecture, setNewLecture] = useState(initial);

  const handleChange = (event) => {
    const { value } = event.target;
    setCourseModuleInput(value);
  };

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setNewLecture({
      ...newLecture,
      [name]: value,
    });
  };
  const handleCourseModuleSubmit = (event) => {
    event.preventDefault();
    insertCourseModule(courseModuleInput);
    setCourseModuleInput('');
  };

  const handleLectureSubmit = (event) => {
    event.preventDefault();
    insertLecture(newLecture);
    setNewLecture(initial);
  };
  return (
    <>
      <FormWrapper onSubmit={handleCourseModuleSubmit}>
        <h1>Módulo</h1>
        <Input onChange={handleChange} value={courseModuleInput} placeholder="Nome" required />
        <Button>Salvar</Button>
      </FormWrapper>
      <FormWrapper onSubmit={handleLectureSubmit}>
        <h1>Aula</h1>
        <Input
          name="name"
          onChange={handleInputs}
          placeholder="Aula"
          value={newLecture['name']}
          required
        />
        <select
          name="courseModuleId"
          value={courseModulesList[0]._id}
          onChange={handleInputs}
          required
        >
          {courseModulesList && courseModulesList.map((item) => (
            <option value={item._id} key={item._id}>
              {item.name}
            </option>
          ))}
        </select>
        <Input
          name="date"
          type="date"
          onChange={handleInputs}
          placeholder="Data"
          value={newLecture['date']}
          required
        />
        <textarea
          name="description"
          placeholder="Descrição"
          onChange={handleInputs}
          value={newLecture['description']}
          required
        />
        <Input
          name="url"
          onChange={handleInputs}
          placeholder="Url"
          value={newLecture['url']}
          required
        />
        <Button>Salvar</Button>
      </FormWrapper>
    </>
  );
}
