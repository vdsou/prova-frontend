import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import Input from '../../components/Input';
import PageWrapper from '../../components/PageWrapper';
import SectionTitle from '../../components/SectionTitle';
import { List, Search } from './styles';

const ManageClasses = () => (
  <PageWrapper>
    <SectionTitle>Painel de Aulas</SectionTitle>
    <Search>
      <Input
        placeholder="Pesquisar aulas"
        type="search"
        colorScheme="secondary"
        style={{
          fontSize: '1.8rem',
        }}
      />
    </Search>
    <List>
      <button className="newClass" type="button">
        <i>
          <FontAwesomeIcon icon={faPlus} />
        </i>
        inserir
      </button>
      <ul>
        <li>
          <div className="item">
            <strong>Aula 1</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data da aula: 12/04/2021</p>
            <p>
              Video:
              <a href="https://www.youtube.com/watch?v=K4TOrB7at0Y">
                click here
              </a>
            </p>
          </div>
          <div className="buttons">
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faEdit} />
              </i>
            </button>
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </button>
          </div>
        </li>
        <li>
          <div className="item">
            <strong>Aula 2</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data da aula: 12/04/2021</p>
            <p>
              Video:
              <a href="https://www.youtube.com/watch?v=K4TOrB7at0Y">click here</a>
            </p>
          </div>
          <div className="buttons">
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faEdit} />
              </i>
            </button>
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </button>
          </div>
        </li>
        <li>
          <div className="item">
            <strong>Aula 3</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data da aula: 12/04/2021</p>
            <p>
              Video:
              <a href="https://www.youtube.com/watch?v=K4TOrB7at0Y">click here</a>
            </p>
          </div>
          <div className="buttons">
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faEdit} />
              </i>
            </button>
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </button>
          </div>
        </li>
        <li>
          <div className="item">
            <strong>Aula 4</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data da aula: 12/04/2021</p>
            <p>
              Video:
              <a href="https://www.youtube.com/watch?v=K4TOrB7at0Y">click here</a>
            </p>
          </div>
          <div className="buttons">
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faEdit} />
              </i>
            </button>
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </button>
          </div>
        </li>
        <li>
          <div className="item">
            <strong>Aula 5</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data da aula: 12/04/2021</p>
            <p>
              Video:
              <a href="https://www.youtube.com/watch?v=K4TOrB7at0Y">click here</a>
            </p>
          </div>
          <div className="buttons">
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faEdit} />
              </i>
            </button>
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </button>
          </div>
        </li>
        <li>
          <div className="item">
            <strong>Aula 6</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data da aula: 12/04/2021</p>
            <p>
              Video:
              <a href="https://www.youtube.com/watch?v=K4TOrB7at0Y">click here</a>
            </p>
          </div>
          <div className="buttons">
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faEdit} />
              </i>
            </button>
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </button>
          </div>
        </li>
        <li>
          <div className="item">
            <strong>Aula 7</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data da aula: 12/04/2021</p>
            <p>
              Video:
              <a href="https://www.youtube.com/watch?v=K4TOrB7at0Y">click here</a>
            </p>
          </div>
          <div className="buttons">
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faEdit} />
              </i>
            </button>
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </button>
          </div>
        </li>
        <li>
          <div className="item">
            <strong>Aula 8</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data da aula: 12/04/2021</p>
            <p>
              Video:
              <a href="https://www.youtube.com/watch?v=K4TOrB7at0Y">click here</a>
            </p>
          </div>
          <div className="buttons">
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faEdit} />
              </i>
            </button>
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </button>
          </div>
        </li>
        <li>
          <div className="item">
            <strong>Aula 9</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data da aula: 12/04/2021</p>
            <p>
              Video:
              <a href="https://www.youtube.com/watch?v=K4TOrB7at0Y">click here</a>
            </p>
          </div>
          <div className="buttons">
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faEdit} />
              </i>
            </button>
            <button type="button">
              <i>
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </button>
          </div>
        </li>
      </ul>
    </List>
  </PageWrapper>
);

export default ManageClasses;
