import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, Icon, Actions, Action } from './styles';

export default function ActionMenu({ view, edit, remove, cancel, type }) { //eslint-disable-line
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Icon onClick={handleToggleVisible}>
        <MdMoreHoriz color="#999" size={20} />
      </Icon>

      <Actions visible={visible}>
        {view ? (
          <Action>
            <Link to="/">
              <MdRemoveRedEye size={15} color="#8E5BE8" />
              <span>Visualizar</span>
            </Link>
          </Action>
        ) : null}

        {edit ? (
          <Action>
            <Link to={`/${type}/edit/1`}>
              <MdModeEdit size={15} color="#4D85EE" />
              <span>Editar</span>
            </Link>
          </Action>
        ) : null}

        {remove ? (
          <Action>
            <Link to="/">
              <MdDeleteForever size={15} color="#DE3B3B" />
              <span>Excluir</span>
            </Link>
          </Action>
        ) : null}

        {cancel ? (
          <Action>
            <Link to="/">
              <MdDeleteForever size={15} color="#DE3B3B" />
              <span>Cancelar</span>
            </Link>
          </Action>
        ) : null}
      </Actions>
    </Container>
  );
}
