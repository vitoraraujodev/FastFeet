import React, { useState, useEffect } from 'react';
import { Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import {
  Container,
  UtilBar,
  Button,
  SubmitButton,
  FormContainer,
  InputGroup,
  Selector,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function New() {
  const [recipients, setRecipients] = useState([]);
  const [deliverymans, setDeliverymans] = useState([]);

  async function loadRecipients() {
    const response = await api.get('recipients');
    setRecipients(
      response.data.map((recipient) => {
        return { id: parseInt(recipient.id, 10), title: recipient.name };
      })
    );
  }

  async function loadDeliverymans() {
    const response = await api.get('deliveryman');
    setDeliverymans(
      response.data.map((deliveryman) => {
        return { id: parseInt(deliveryman.id, 10), title: deliveryman.name };
      })
    );
  }

  useEffect(() => {
    try {
      loadRecipients();
      loadDeliverymans();
    } catch (e) {
      alert('Não foi possível carregar dados.');
    }
  }, []);

  async function handleSubmit(data) {
    try {
      await api.post('/delivery', data);
      history.push('/delivery');
    } catch (err) {
      alert('Não foi possível realizar o cadastro. Tente novamente.');
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <UtilBar>
        <strong>Cadastro de encomendas</strong>
        <div>
          <Button to="/delivery" background="#ccc">
            <MdKeyboardArrowLeft size={22} color="#fff" />
            <span>VOLTAR</span>
          </Button>
          <SubmitButton type="submit" background="#7D40E7">
            <MdDone size={22} color="#fff" />
            <span>SALVAR</span>
          </SubmitButton>
        </div>
      </UtilBar>
      <FormContainer>
        <InputGroup>
          <div style={{ marginLeft: 0 }}>
            <p>Destinatário</p>
            <Selector
              name="recipient_id"
              placeholder="Selecione..."
              options={recipients}
            />
          </div>

          <div style={{ marginRight: 0 }}>
            <p>Entregador</p>
            <Selector
              name="deliveryman_id"
              placeholder="Selecione..."
              options={deliverymans}
            />
          </div>
        </InputGroup>
        <p style={{ marginTop: 20 }}>Nome do produto</p>
        <Input name="product" placeholder="Digite o nome do produto" />
      </FormContainer>
    </Container>
  );
}
