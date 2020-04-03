import React from 'react';

import {
  Background,
  Container,
  Logo,
  Form,
  TextLabel,
  Input,
  SubmitButton,
} from './styles';

import logo from '~/assets/fastfeet-logo.png';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Logo src={logo} />
        <Form>
          <TextLabel>SEU E-MAIL</TextLabel>
          <Input placeholder="exemplo@email.com" />
          <TextLabel>SUA SENHA</TextLabel>
          <Input placeholder="**********" />

          <SubmitButton>Entrar no sistema</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
