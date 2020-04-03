import React from 'react';

import { Container } from './styles';

import logo from '~/assets/fastfeet-logo.png';

export default function SignIn() {
  return (
    <Container>
      <img src={logo} alt="fastfeet-logo" />

      <form>
        <p>SEU E-MAIL</p>
        <input placeholder="exemplo@email.com" />

        <p>SUA SENHA</p>
        <input placeholder="**********" />

        <button type="submit">Entrar no sistema</button>
      </form>
    </Container>
  );
}
