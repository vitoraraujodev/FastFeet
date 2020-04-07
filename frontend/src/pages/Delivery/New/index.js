import React, { useState } from 'react';
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

export default function New() {
  const [recipients, setRecipients] = useState([]);
  const [deliverymans, setDeliverymans] = useState([]);

  function handleSubmit() {}

  return (
    <Container onSubmit={handleSubmit}>
      <UtilBar>
        <strong>Cadastro de encomendas</strong>
        <div>
          <Button to="/recipients" background="#ccc">
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
              name="recipient"
              placeholder="Selecione..."
              options={recipients}
            />
          </div>

          <div style={{ marginRight: 0 }}>
            <p>Entregador</p>
            <Selector
              name="deliveryman"
              placeholder="Selecione..."
              options={deliverymans}
            />
          </div>
        </InputGroup>
        <p style={{ marginTop: 20 }}>Nome do produto</p>
        <Input name="name" placeholder="Digite o nome do produto" />
      </FormContainer>
    </Container>
  );
}
