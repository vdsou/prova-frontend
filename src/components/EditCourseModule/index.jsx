import React, { useContext, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import FormWrapper from './styles';
import { CourseModulesContext } from '../../context/CourseModulesContext';

export default function EditCourseModule() {
  const { editUpdate, editCourseModule } = useContext(CourseModulesContext);
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editCourseModule(input);
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1>Alterar nome do módulo</h1>
      <h2>{editUpdate.value}</h2>
      <Input onChange={handleChange} />
      <Button>Salvar</Button>
    </FormWrapper>
  );
}
