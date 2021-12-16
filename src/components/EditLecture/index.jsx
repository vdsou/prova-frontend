/* eslint-disable dot-notation */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import FormWrapper from './styles';
import { CourseModulesContext } from '../../context/CourseModulesContext';

export default function EditLecture() {
  const { editLectureUpdate, lectureList, editLecture } = useContext(CourseModulesContext);
  const [lectureToUpdate, setLectureToUpdate] = useState({});
  const [selectedLecture] = lectureList.filter((item) => item._id === editLectureUpdate);

  const lectureSpread = {
    name: '',
    date: '',
    description: '',
    url: '',
  };

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setLectureToUpdate({
      ...lectureToUpdate,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editLecture(lectureToUpdate);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1>Aula</h1>
      <Input
        name="name"
        onChange={handleInputs}
        placeholder="Aula"
        defaultValue={selectedLecture.name}
        required
      />
      <Input
        name="date"
        type="date"
        defaultValue={selectedLecture.date}
        onChange={handleInputs}
        placeholder="Data"
        required
      />
      <textarea
        name="description"
        defaultValue={selectedLecture.description}
        placeholder="Descrição"
        onChange={handleInputs}
        required
      />
      <Input
        name="url"
        defaultValue={selectedLecture.url}
        onChange={handleInputs}
        placeholder="Url"
        required
      />
      <Button>Salvar</Button>
    </FormWrapper>
  );
}

EditLecture.propTypes = {
  props: PropTypes.any,
}.isRequired;
