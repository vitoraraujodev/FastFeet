import React from 'react';
import { Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import {
  Container,
  UtilBar,
  Button,
  SubmitButton,
  FormContainer,
  InputGroup,
} from './styles';

export default function Edit() {
  const recipient = {
    name: 'Vitor Araujo',
    rua: 'Rua São Clemente',
    numero: '114',
    complemento: '702 Bloco 1',
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    cep: '22260-002',
  };

  function handleSubmit() {}

  return (
    <Container initialData={recipient} onSubmit={handleSubmit}>
      <UtilBar>
        <strong>Edição de destinatário</strong>
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
        <p style={{ marginTop: 0 }}>Nome</p>
        <Input name="name" placeholder="Digite o nome" />
        <InputGroup>
          <div style={{ marginLeft: 0 }}>
            <p>Rua</p>
            <Input name="rua" />
          </div>
          <InputGroup style={{ marginRight: 0 }}>
            <div>
              <p>Número</p>
              <Input name="numero" placeholder="1234" />
            </div>

            <div style={{ marginRight: 0 }}>
              <p>Complemento</p>
              <Input name="complemento" placeholder="Apt. Bloco 0" />
            </div>
          </InputGroup>
        </InputGroup>
        <InputGroup>
          <div style={{ marginLeft: 0 }}>
            <p>Cidade</p>
            <Input name="cidade" />
          </div>
          <div>
            <p>Estado</p>
            <Input name="estado" />
          </div>
          <div style={{ marginRight: 0 }}>
            <p>CEP</p>
            <Input name="cep" placeholder="00000-000" />
          </div>
        </InputGroup>
      </FormContainer>
    </Container>
  );
}
