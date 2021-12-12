import React from 'react';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from '../../components/Input';
import PageWrapper from '../../components/PageWrapper';
import SectionTitle from '../../components/SectionTitle';
import { Search, List } from './styles';

const ManageModules = () => (
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
      <button className="newClass" type="button">
        <i>
          <FontAwesomeIcon icon={faPlus} />
        </i>
        inserir
      </button>
      <ul>
        <li>
          <div className="item">
            <strong>Módulo 1</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data de Criação: 12/04/2021</p>
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
            <strong>Módulo 2</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data de Criação: 12/04/2021</p>
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
            <strong>Módulo 3</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data de Criação: 12/04/2021</p>
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
            <strong>Módulo 4</strong>
            <p>id: 123456</p>
            <p>Módulo: módulo 1</p>
            <p>Data de Criação: 12/04/2021</p>
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

export default ManageModules;
