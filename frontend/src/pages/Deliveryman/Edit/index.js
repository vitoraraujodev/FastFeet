import React from 'react';
import { Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import AvatarInput from '~/components/AvatarInput';

import {
  Container,
  UtilBar,
  Button,
  SubmitButton,
  FormContainer,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Edit({ location }) {
  const deliveryman = location.state.content || null;

  async function handleSubmit(data) {
    try {
      await api.put(`/deliveryman/${deliveryman.id}`, data);
      history.push('/deliveryman');
    } catch (err) {
      alert('Não foi possível realizar a alteração. Tente novamente.');
    }
  }

  return (
    <Container initialData={deliveryman} onSubmit={handleSubmit}>
      <UtilBar>
        <strong>Cadastro de entregadores</strong>
        <div>
          <Button to="/deliveryman" background="#ccc">
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
        <AvatarInput name="avatar_id" />
        <p style={{ marginTop: 0 }}>Nome</p>
        <Input name="name" placeholder="Digite o nome" />
        <p>Email</p>
        <Input name="email" placeholder="exemplo@email.com" />
      </FormContainer>
    </Container>
  );
}
