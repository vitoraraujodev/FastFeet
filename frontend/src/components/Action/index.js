import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import api from '~/services/api';

import { Container, Icon, Actions, Action } from './styles';

export default function ActionMenu({ content, view, edit, remove, cancel, type, onView }) { //eslint-disable-line
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDelete() {
    try {
      await api.delete(`${type}/${content.id}`);
      window.location.reload();
    } catch (e) {
      alert('Falha ao remover item. Tente novamente.');
    }
  }

  async function handleCancel() {
    try {
      await api.delete(`problem/${content.id}/cancel-delivery`);
      window.location.reload();
    } catch (e) {
      alert('Falha ao cancelar item. Tente novamente.');
    }
  }

  return (
    <Container>
      <Icon onClick={handleToggleVisible}>
        <MdMoreHoriz color="#999" size={20} />
      </Icon>

      <Actions visible={visible}>
        {view ? (
          <Action
            onClick={() => {
              handleToggleVisible();
              onView();
            }}
          >
            <MdRemoveRedEye size={15} color="#8E5BE8" />
            <span>Visualizar</span>
          </Action>
        ) : null}

        {edit ? (
          <Action>
            <Link
              to={{
                pathname: `/${type}/edit/${content.id}`,
                state: { content },
              }}
            >
              <MdModeEdit size={15} color="#4D85EE" />
              <span>Editar</span>
            </Link>
          </Action>
        ) : null}

        {remove ? (
          <Action onClick={handleDelete}>
            <MdDeleteForever size={15} color="#DE3B3B" />
            <span>Excluir</span>
          </Action>
        ) : null}

        {cancel ? (
          <Action onClick={handleCancel}>
            <MdDeleteForever size={15} color="#DE3B3B" />
            <span>Cancelar</span>
          </Action>
        ) : null}
      </Actions>
    </Container>
  );
}
