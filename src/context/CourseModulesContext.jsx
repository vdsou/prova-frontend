/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

const CourseModulesContext = createContext();

const CourseModulesProvider = ({ children }) => {
  const [courseModulesList, setCourseModulesList] = useState([]);
  const [lectureList, setLectureList] = useState([]);
  const [editUpdate, setEditUpdate] = useState([]);
  const [selectedCourseModule, setSelectedCourseModule] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState([]);

  useEffect(() => {
    api.get('/course-modules/get').then(({ data }) => {
      const { courseModules } = data;
      setCourseModulesList(courseModules);
    });
  }, []);
  useEffect(() => {
    api.get('/lectures/get').then(({ data }) => {
      const { lecture } = data;
      setLectureList(lecture);
    });
  }, []);

  const editCourseModule = (value) => {
    api
      .patch(`/course-modules/update/${editUpdate.id}`, { name: value })
      .then(({ data }) => setMessage(data.message))
      .catch((err) => {
        if (err.response) {
          setError(err.response.message);
        }
      });
  };

  const deleteCourseModule = (id) => {
    api
      .delete(`/course-modules/delete/${id}`)
      .then(({ data }) => {
        setMessage(data.message);
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.message);
        }
      });
  };
  return (
    <CourseModulesContext.Provider
      value={{
        courseModulesList,
        lectureList,
        selectedCourseModule,
        message,
        error,
        editUpdate,
        setEditUpdate,
        editCourseModule,
        deleteCourseModule,
        setCourseModulesList,
        setLectureList,
        setSelectedCourseModule,
      }}
    >
      {children}
    </CourseModulesContext.Provider>
  );
};

CourseModulesProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export { CourseModulesProvider, CourseModulesContext };
