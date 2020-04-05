import React from 'react';

import { Container, Table } from './styles';

import Action from '~/components/Action';

export default function List() {
  return (
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
            <td>Carai vei deu ruim aqui vei</td>
            <td align="center">
              <Action type="problems" view cancel />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Carai vei deu ruim aqui vei</td>
            <td align="center">
              <Action type="problems" view cancel />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Carai vei deu ruim aqui vei</td>
            <td align="center">
              <Action type="problems" view cancel />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
