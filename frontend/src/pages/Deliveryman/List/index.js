import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import { Container, UtilBar, Input, Table, Button } from './styles';

import Action from '~/components/Action';

import lolcoffee from '~/assets/lolcoffee.jpg';

export default function List() {
  return (
    <Container>
      <strong>Gerenciando entregadores</strong>
      <UtilBar>
        <Input>
          <MdSearch size={22} color="#999" />

          <input placeholder="Buscar por entregadores" />
        </Input>
        <Button type="button">
          <MdAdd size={22} color="#fff" />
          <span>CADASTRAR</span>
        </Button>
      </UtilBar>

      <Table>
        <thead>
          <tr>
            <th width="10%" align="left">
              ID
            </th>
            <th width="10%" align="left">
              Foto
            </th>
            <th width="18%" align="left">
              Nome
            </th>
            <th width="20%" align="left">
              Email
            </th>
            <th width="5%" align="center">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              <img src={lolcoffee} alt="lolcoffee" />
            </td>
            <td>Felipe Mattos</td>
            <td>mattos907@gmail.com</td>
            <td align="center">
              <Action type="deliveryman" edit remove />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>
              <img src={lolcoffee} alt="lolcoffee" />
            </td>
            <td>Felipe Mattos</td>
            <td>mattos907@gmail.com</td>
            <td align="center">
              <Action type="deliveryman" edit remove />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>
              <img src={lolcoffee} alt="lolcoffee" />
            </td>
            <td>Felipe Mattos</td>
            <td>mattos907@gmail.com</td>
            <td align="center">
              <Action type="deliveryman" edit remove />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
