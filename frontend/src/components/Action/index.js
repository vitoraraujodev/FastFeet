import React, { useState } from 'react';

import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, Icon, Actions, Action } from './styles';

export default function ActionMenu() {
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
        <Action>
          <MdRemoveRedEye size={15} color="#8E5BE8" />
          <span>Visualizar</span>
        </Action>
        <Action>
          <MdModeEdit size={15} color="#4D85EE" />
          <span>Editar</span>
        </Action>
        <Action>
          <MdDeleteForever size={15} color="#DE3B3B" />
          <span>Excluir</span>
        </Action>
      </Actions>
    </Container>
  );
}
