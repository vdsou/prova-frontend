/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { CourseModulesContext } from '../../context/CourseModulesContext';
import Input from '../Input';
import PageWrapper from '../PageWrapper';
import SectionTitle from '../SectionTitle';
import { List, Search } from './styles';
import InsertCourseModule from '../InsertCourseModule';
import EditLecture from '../EditLecture';
import SuccessMessage from '../SuccessMessage';
import ErrorMessage from '../ErrorMessage';

export default function ManageLectures() {
  const [list, setList] = useState([]);
  const [renderEdit, setRenderEdit] = useState(false);
  const [renderInsert, setRenderInsert] = useState(false);
  const [renderList, setRenderList] = useState(true);
  const {
    lectureList,
    setEditLectureUpdateId,
    deleteLecture,
    success,
    setSuccess,
    setError,
    error,
  } = useContext(CourseModulesContext);

  useEffect(() => {
    setList(lectureList);
  }, [lectureList]);

  const handleInsert = () => {
    setRenderInsert(true);
    setRenderList(false);
    setRenderEdit(false);
    setSuccess('');
    setError('');
  };
  const handleLectureEdit = (id) => {
    setEditLectureUpdateId(id);
    setRenderEdit(true);
    setRenderList(false);
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

  const handleDelete = (id) => {
    const newList = list.filter((item) => item._id !== id);
    deleteLecture(id);
    setList(newList);
  };
  const handleSearch = (event) => {
    const { value } = event.target;
    const search = lectureList.filter(
      (item) => item.name.toLowerCase() === value.toLowerCase(),
    );
    if (value === '') setList(lectureList);
    else setList(search);
  };
  return (
    <PageWrapper>
      <SectionTitle>Painel de Aulas</SectionTitle>
      <Search>
        <Input
          placeholder="Pesquisar aulas"
          type="search"
          onChange={handleSearch}
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
        {renderEdit && <EditLecture />}
        {renderList && (
          <ul>
            {list && list.map((item) => (
              <li key={item._id}>
                <div className="item">
                  <strong>{item.name}</strong>
                  <p>{`id: ${item._id}`}</p>
                  <p>{`Módulo: ${item.courseModule.name}`}</p>
                  <p>{`Data da aula: ${item.date}`}</p>
                  <p>
                    Video:
                    <a href={item.url}>
                      <strong> acessar o vídeo</strong>
                    </a>
                  </p>
                </div>
                <div className="buttons">
                  <button
                    onClick={() => handleLectureEdit(item._id)}
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
}
