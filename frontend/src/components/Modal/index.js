import React from 'react';
import PropTypes from 'prop-types';

import { Container, Background, Content, ModalContainer } from './styles';

export default function Modal({ children, visible, onClose }) {
  return (
    <Container>
      <Background visible={visible} onClick={onClose} />
      <Content visible={visible} onClick={onClose}>
        <ModalContainer>{children}</ModalContainer>
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};
