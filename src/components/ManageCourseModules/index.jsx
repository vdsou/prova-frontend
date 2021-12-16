/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../Input';
import PageWrapper from '../PageWrapper';
import SectionTitle from '../SectionTitle';
import { Search, List } from './styles';
import { CourseModulesContext } from '../../context/CourseModulesContext';
import EditCourseModule from '../EditCourseModule';
import InsertCourseModule from '../InsertCourseModule';
import ErrorMessage from '../ErrorMessage';
import SuccessMessage from '../SuccessMessage';

const ManageCourseModules = () => {
  const {
    courseModulesList,
    setEditCourseModuleUpdate,
    deleteCourseModule,
    setError,
    error,
    setSuccess,
    success,
  } = useContext(CourseModulesContext);
  const [list, setList] = useState([]);
  const [renderEdit, setRenderEdit] = useState(false);
  const [renderInsert, setRenderInsert] = useState(false);
  const [renderList, setRenderList] = useState(true);

  useEffect(() => {
    setList(courseModulesList);
  }, [courseModulesList]);

  const handleEdit = (id, value) => {
    setRenderEdit(true);
    setRenderList(false);
    setEditCourseModuleUpdate({ id, value });
    setSuccess('');
    setError('');
  };
  const handleDelete = (id) => {
    const newList = list.filter((item) => item._id !== id);
    setList(newList);

    deleteCourseModule(id);
  };
  const handleInsert = () => {
    setRenderInsert(true);
    setRenderList(false);
    setRenderEdit(false);
    setSuccess('');
    setError('');
  };
  const handleBack = () => {
    if (renderInsert || renderEdit) {
      setRenderInsert(false);
      setRenderList(true);
      setRenderEdit(false);
      setSuccess('');
      setError('');
    }
  };
  return (
    <PageWrapper>
      <SectionTitle>Painel de Módulos</SectionTitle>
      <Search>
        <Input
          placeholder="Pesquisar módulos"
          colorScheme="secondary"
          style={{
            fontSize: '1.8rem',
          }}
        />
      </Search>
      <List>
        <div className="top-buttons">
          <button onClick={handleInsert} className="new-lecture-button" type="button">
            inserir
          </button>
          <button onClick={handleBack} className="new-lecture-button" type="button">
            Voltar
          </button>
        </div>
        {success && <SuccessMessage>{success}</SuccessMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {renderInsert && <InsertCourseModule />}
        {renderEdit && <EditCourseModule />}
        {renderList && (
          <ul>
            {list && list.map((item) => (
              <li key={item._id}>
                <div className="item">
                  <strong>{item.name}</strong>
                  <p>{`id: ${item._id}`}</p>
                  <p>{`Módulo: ${item.name}`}</p>
                  <p>{`Quantidade de aulas: ${item.lecturesQuantity}`}</p>
                  <p>{`Data de Criação: ${item.createdAt}`}</p>
                </div>
                <div className="buttons">
                  <button
                    onClick={() => handleEdit(item._id, item.name)}
                    type="button"
                  >
                    <i>
                      <FontAwesomeIcon icon={faEdit} />
                    </i>
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    type="button"
                  >
                    <i>
                      <FontAwesomeIcon icon={faTrash} />
                    </i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </List>
    </PageWrapper>
  );
};

export default ManageCourseModules;
