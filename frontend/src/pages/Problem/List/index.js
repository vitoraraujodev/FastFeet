import React, { useState } from 'react';

import { Container, Table, ProblemDescription } from './styles';

import Action from '~/components/Action';
import Modal from '~/components/Modal';

export default function List() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <p style={{ marginTop: 0, paddingTop: 0 }}>VISUALIZAR PROBLEMA</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus
          interdum ipsum, quis hendrerit diam sagittis vel. Integer sem ligula,
          viverra id velit eu, malesuada eleifend massa. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Morbi quis arcu posuere, venenatis erat in, mattis elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Proin nec hendrerit dui.
          Suspendisse sed tortor venenatis, faucibus dui quis, posuere magna.
          Maecenas a dolor a felis fermentum tincidunt. Phasellus commodo
          venenatis nunc ac porta. Sed at commodo mi, quis volutpat nunc. Proin
          molestie nunc rhoncus nulla lobortis scelerisque. Proin in ante eu
          ligula ultricies euismod. Curabitur elementum ac nisi sed porta.
        </span>
      </Modal>
      <Container>
        <strong>Problemas na entrega</strong>

        <Table>
          <thead>
            <tr>
              <th width="10%" align="left">
                Encomenda
              </th>
              <th width="50%" align="left">
                Problema
              </th>
              <th width="5%" align="center">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#01</td>
              <ProblemDescription>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  luctus interdum ipsum, quis hendrerit diam sagittis vel.
                  Integer sem ligula, viverra id velit eu, malesuada eleifend
                  massa. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Morbi quis arcu posuere,
                  venenatis erat in, mattis elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Proin nec hendrerit dui.
                  Suspendisse sed tortor venenatis, faucibus dui quis, posuere
                  magna. Maecenas a dolor a felis fermentum tincidunt. Phasellus
                  commodo venenatis nunc ac porta. Sed at commodo mi, quis
                  volutpat nunc. Proin molestie nunc rhoncus nulla lobortis
                  scelerisque. Proin in ante eu ligula ultricies euismod.
                  Curabitur elementum ac nisi sed porta.
                </span>
              </ProblemDescription>
              <td align="center">
                <Action
                  type="problems"
                  view
                  cancel
                  onView={() => setVisible(true)}
                />
              </td>
            </tr>
            <tr>
              <td>#01</td>
              <ProblemDescription>
                <span>Carai vei deu ruim</span>
              </ProblemDescription>
              <td align="center">
                <Action
                  type="problems"
                  view
                  cancel
                  onView={() => setVisible(true)}
                />
              </td>
            </tr>
            <tr>
              <td>#01</td>
              <ProblemDescription>
                <span>Carai vei deu ruim</span>
              </ProblemDescription>
              <td align="center">
                <Action
                  type="problems"
                  view
                  cancel
                  onView={() => setVisible(true)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
