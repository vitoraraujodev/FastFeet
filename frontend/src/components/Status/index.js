import React from 'react';

import { Container, Circle } from './styles';

export default function Status({ status }) {
  let color = '#FFF';
  let background = '#FFF';
  let statusText = '';

  switch (status) {
    case 'canceled':
      color = '#DE3B3B';
      background = '#FAB0B0';
      statusText = 'CANCELADO';
      break;
    case 'pendent':
      color = '#C1BC35';
      background = '#F0F0DF';
      statusText = 'PENDENTE';
      break;
    case 'taken':
      color = '#4D85EE';
      background = '#BAD2FF';
      statusText = 'RETIRADO';
      break;
    case 'delivered':
      color = '#2CA42B';
      background = '#DFF0DF';
      statusText = 'ENTREGUE';
      break;
    default:
      break;
  }

  return (
    <Container background={background} color={color}>
      <Circle background={color} />
      <b>{statusText}</b>
    </Container>
  );
}
