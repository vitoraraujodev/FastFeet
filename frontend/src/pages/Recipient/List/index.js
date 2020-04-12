import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import { Container, UtilBar, Input, Table, Button } from './styles';

import Action from '~/components/Action';

import api from '~/services/api';

export default function List() {
  const [recipients, setRecipients] = useState([]);

  async function loadRecipients() {
    const response = await api.get('recipients');
    setRecipients(response.data);
  }

  useEffect(() => {
    loadRecipients();
  }, []);

  return (
    <Container>
      <strong>Gerenciando destinatários</strong>
      <UtilBar>
        <Input>
          <MdSearch size={22} color="#999" />

          <input placeholder="Buscar por destinatários" />
        </Input>
        <Button to="/recipients/new">
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
          {recipients.map((recipient) => (
            <tr>
              <td>#{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>
                {recipient.rua}, {recipient.numero}, {recipient.cidade},{' '}
                {recipient.estado}
              </td>
              <td align="center">
                <Action type="recipients" content={recipient} edit remove />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
