import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import { Container, UtilBar, Input, Table, Button } from './styles';

import Action from '~/components/Action';

export default function List() {
  return (
    <Container>
      <strong>Gerenciando destinatários</strong>
      <UtilBar>
        <Input>
          <MdSearch size={22} color="#999" />

          <input placeholder="Buscar por destinatários" />
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
            <th width="20%" align="left">
              Nome
            </th>
            <th width="60%" align="left">
              Endereço
            </th>
            <th width="5%" align="center">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Felipe Mattos</td>
            <td>Rua São Clemente, 114, Rio de Janeiro, RJ</td>
            <td align="center">
              <Action type="recipients" edit remove />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Felipe Mattos</td>
            <td>Rua São Clemente, 114, Rio de Janeiro, RJ</td>
            <td align="center">
              <Action type="recipients" edit remove />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Felipe Mattos</td>
            <td>Rua São Clemente, 114, Rio de Janeiro, RJ</td>
            <td align="center">
              <Action type="recipients" edit remove />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
