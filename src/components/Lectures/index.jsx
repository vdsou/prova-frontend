/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Cards, Card } from './styles';
import SectionTitle from '../SectionTitle';
import { CourseModulesContext } from '../../context/CourseModulesContext';

const Lectures = () => {
  const [filteredLectures, setFiltedLectures] = useState([]);
  const { lectureList, selectedCourseModule } = useContext(CourseModulesContext);
  useEffect(() => {
    if (lectureList) {
      const filter = lectureList.filter(
        (item) => item.courseModule._id === selectedCourseModule,
        );
        setFiltedLectures(filter);
      }
    }, [selectedCourseModule]);
    console.log(filteredLectures);
  return (
    <Wrapper>
      <SectionTitle>Aulas</SectionTitle>
      <Cards>
        {filteredLectures && filteredLectures.map((item) => (
          <Card key={item._id}>

            <h2>{item.courseModule.name}</h2>
            <a
              href={item.url}
              rel="noreferrer"
              target="_blank"
            >
              <div>
                <img
                  src={`https://img.youtube.com/vi/${item.url.split('=')[1]}/maxresdefault.jpg`}
                  width="240"
                  alt="Video"
                />
                <i>
                  <FontAwesomeIcon icon={faPlay} />
                </i>
              </div>
            </a>
            <h3>{item.name}</h3>
            <p>
              {item.description}
            </p>
          </Card>
        ))}
        {(filteredLectures && filteredLectures.length === 0) && <h2 className="no-lecture">Não há aulas</h2>}
      </Cards>
    </Wrapper>
  );
};

export default Lectures;
