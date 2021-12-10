import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import {
  Title, Wrapper, Cards, Card,
} from './styles';

const Classes = () => (
  <Wrapper>
    <Title>Classes</Title>
    <Cards>
      <Card>
        <h2>Módulo Selecionado1</h2>
        <a
          href="https://www.youtube.com/watch?v=K4TOrB7at0Y"
          rel="noreferrer"
          target="_blank"
        >
          <div>
            <img
              src="https://img.youtube.com/vi/K4TOrB7at0Y/maxresdefault.jpg"
              width="240"
              alt="Video"
            />
            <i><FontAwesomeIcon icon={faPlay} /></i>
          </div>
        </a>
        <h3>Aula</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetursit amet consectetursit amet
          consectetursit amet consectetur adipisicing elit.
        </p>
      </Card>
      <Card>
        <h2>Módulo Selecionado2</h2>
        <a
          href="https://www.youtube.com/watch?v=K4TOrB7at0Y"
          rel="noreferrer"
          target="_blank"
        >
          <div>
            <img
              src="https://img.youtube.com/vi/K4TOrB7at0Y/maxresdefault.jpg"
              width="240"
              alt="Video"
            />
            <i><FontAwesomeIcon icon={faPlay} /></i>
          </div>
        </a>
        <h3>Aula</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetursit amet consectetursit amet
          consectetursit amet consectetur adipisicing elit.
        </p>
      </Card>
      <Card>
        <h2>Módulo Selecionado3</h2>
        <a
          href="https://www.youtube.com/watch?v=K4TOrB7at0Y"
          rel="noreferrer"
          target="_blank"
        >
          <div>
            <img
              src="https://img.youtube.com/vi/K4TOrB7at0Y/maxresdefault.jpg"
              width="240"
              alt="Video"
            />
            <i><FontAwesomeIcon icon={faPlay} /></i>
          </div>
        </a>
        <h3>Aula</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetursit amet consectetursit amet
          consectetursit amet consectetur adipisicing elit.
        </p>
      </Card>
    </Cards>
  </Wrapper>
);

export default Classes;
