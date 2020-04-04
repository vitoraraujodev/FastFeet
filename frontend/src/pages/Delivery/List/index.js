import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import {
  Container,
  UtilBar,
  Input,
  Table,
  Button,
  Deliveryman,
} from './styles';

import Action from '~/components/Action';
import Status from '~/components/Status';

import lolcoffee from '~/assets/lolcoffee.jpg';

export default function List() {
  return (
    <Container>
      <strong>Gerenciando encomendas</strong>
      <UtilBar>
        <Input>
          <MdSearch size={22} color="#999" />

          <input placeholder="Buscar por encomendas" />
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
              Destinatário
            </th>
            <th width="20%" align="left">
              Entregador
            </th>
            <th width="18%" align="left">
              Cidade
            </th>
            <th width="10%" align="center">
              Estado
            </th>
            <th width="20%" align="center">
              Status
            </th>
            <th width="5%" align="center">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Vitor Araujo</td>
            <td>
              <Deliveryman>
                <img src={lolcoffee} alt="lolcoffee" />
                <span>Felipe Mattos</span>
              </Deliveryman>
            </td>
            <td>Rio de Janeiro</td>
            <td align="center">RJ</td>
            <td align="center">
              <Status status="canceled" />
            </td>
            <td align="center">
              <Action type="delivery" view edit remove />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Vitor Araujo</td>
            <td>
              <Deliveryman>
                <img src={lolcoffee} alt="lolcoffee" />
                <span>Felipe Mattos</span>
              </Deliveryman>
            </td>
            <td>Rio de Janeiro</td>
            <td align="center">RJ</td>
            <td align="center">
              <Status status="pendent" />
            </td>
            <td align="center">
              <Action type="delivery" view edit remove />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Vitor Araujo</td>
            <td>
              <Deliveryman>
                <img src={lolcoffee} alt="lolcoffee" />
                <span>Felipe Mattos</span>
              </Deliveryman>
            </td>
            <td>Rio de Janeiro</td>
            <td align="center">RJ</td>
            <td align="center">
              <Status status="delivered" />
            </td>
            <td align="center">
              <Action type="delivery" view edit remove />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Vitor Araujo</td>
            <td>
              <Deliveryman>
                <img src={lolcoffee} alt="lolcoffee" />
                <span>Felipe Mattos</span>
              </Deliveryman>
            </td>
            <td>Rio de Janeiro</td>
            <td align="center">RJ</td>
            <td align="center">
              <Status status="taken" />
            </td>
            <td align="center">
              <Action type="delivery" view edit remove />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
