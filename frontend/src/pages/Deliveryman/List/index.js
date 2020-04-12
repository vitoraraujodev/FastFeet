import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import { Container, UtilBar, Input, Table, Button } from './styles';

import Action from '~/components/Action';

import api from '~/services/api';

import lolcoffee from '~/assets/lolcoffee.jpg';

export default function List() {
  const [deliverymans, setDeliverymans] = useState([]);

  async function loadDeliverymans() {
    const response = await api.get('deliveryman');
    setDeliverymans(response.data);
  }

  useEffect(() => {
    loadDeliverymans();
  }, []);

  async function handleSearch({ value }) {
    const response = await api.get('deliveryman', {
      params: { search: value },
    });
    setDeliverymans(response.data);
  }

  return (
    <Container>
      <strong>Gerenciando entregadores</strong>
      <UtilBar>
        <Input>
          <MdSearch size={22} color="#999" />
          <input
            onChange={(e) => handleSearch(e.target)}
            placeholder="Buscar por entregadores"
          />
        </Input>
        <Button to="/deliveryman/new">
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
          {deliverymans.map((deliveryman) => (
            <tr>
              <td>#{deliveryman.id}</td>
              <td>
                <img
                  src={deliveryman.avatar ? deliveryman.avatar.url : lolcoffee}
                  alt="avatar"
                />
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td align="center">
                <Action type="deliveryman" content={deliveryman} edit remove />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
