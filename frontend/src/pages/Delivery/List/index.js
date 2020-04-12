import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import { format, parseISO } from 'date-fns';

import Action from '~/components/Action';
import Status from '~/components/Status';
import Modal from '~/components/Modal';

import {
  Container,
  UtilBar,
  Input,
  Table,
  Button,
  Deliveryman,
} from './styles';

import api from '~/services/api';

import lolcoffee from '~/assets/lolcoffee.jpg';

export default function List() {
  const [deliveries, setDeliveries] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState({
    id: 0,
    product: '',
    canceled_at: null,
    start_date: null,
    end_date: null,
    deliveryman: {
      id: 0,
      name: '',
      email: '',
    },
    recipient: {
      id: 0,
      name: '',
      rua: '',
      numero: 0,
      complemento: '',
      estado: '',
      cidade: '',
      cep: '',
    },
    signature: null,
  });

  async function loadDeliveries() {
    const response = await api.get('delivery');
    setDeliveries(response.data);
  }

  useEffect(() => {
    loadDeliveries();
  }, []);

  async function handleSearch({ value }) {
    const response = await api.get('delivery', { params: { search: value } });
    setDeliveries(response.data);
  }

  return (
    <>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <p style={{ marginTop: 0, paddingTop: 0 }}>Informações da encomenda</p>
        <span>
          {selectedDelivery.recipient.rua}, {selectedDelivery.recipient.numero}
        </span>
        <br />
        <span>
          {selectedDelivery.recipient.cidade} -
          {selectedDelivery.recipient.estado}
        </span>
        <br />
        <span>{selectedDelivery.recipient.cep}</span> <br />
        <p>Datas</p>
        <b>Retirada: </b>
        <span>
          {selectedDelivery.start_date
            ? format(parseISO(selectedDelivery.start_date), 'dd/MM/yyyy')
            : '--/--/--'}
        </span>
        <br />
        <b>Entrega: </b>
        <span>
          {selectedDelivery.end_date
            ? format(parseISO(selectedDelivery.end_date), 'dd/MM/yyyy')
            : '--/--/--'}
        </span>
        <br />
        {selectedDelivery.signature ? (
          <>
            <p>Assinatura do destinatário</p>
            <img src={selectedDelivery.signature.url} alt="signature" />
          </>
        ) : null}
      </Modal>
      <Container>
        <strong>Gerenciando encomendas</strong>
        <UtilBar>
          <Input onSubmit={handleSearch}>
            <MdSearch size={22} color="#999" />
            <input
              onChange={(e) => handleSearch(e.target)}
              placeholder="Buscar por encomendas"
            />
          </Input>
          <Button to="/delivery/new">
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
            {deliveries.map((delivery) => (
              <tr>
                <td>#{delivery.id}</td>
                <td>{delivery.recipient.name}</td>
                <td>
                  <Deliveryman>
                    <img
                      src={
                        delivery.deliveryman.avatar
                          ? delivery.deliveryman.avatar.url
                          : lolcoffee
                      }
                      alt="avatar"
                    />
                    <span>{delivery.deliveryman.name}</span>
                  </Deliveryman>
                </td>
                <td>{delivery.recipient.cidade}</td>
                <td align="center">{delivery.recipient.estado}</td>
                <td align="center">
                  <Status delivery={delivery} />
                </td>
                <td align="center">
                  <div onClick={() => setSelectedDelivery(delivery)}> {/*eslint-disable-line*/}
                    <Action
                      type="delivery"
                      content={delivery}
                      view
                      edit
                      remove
                      onView={() => setVisible(true)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
