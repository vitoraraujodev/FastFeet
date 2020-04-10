import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@rocketseat/unform';

import { Container, LoginForm } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="fastfeet-logo" />

      <LoginForm onSubmit={handleSubmit}>
        <p>SEU E-MAIL</p>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <p>SUA SENHA</p>
        <Input name="password" type="password" placeholder="**********" />

        <button type="submit">Entrar no sistema</button>
      </LoginForm>
    </Container>
  );
}
