import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Background, Container, Input } from './styles';

import Logo from '~/assets/fastfeet-logo.svg';

import Button from '~/components/Button';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [deliveryman_id, setDeliveryman_Id] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(deliveryman_id));
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />

      <Background>
        <Container>
          <Logo width={250} />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            autoComplete="false"
            returnKeyType="send"
            value={deliveryman_id}
            onChangeText={setDeliveryman_Id}
            placeholder="Informe seu ID de cadastro"
          />
          <Button loading={loading} onPress={handleSubmit} background="#82BF18">
            Entrar no sistema
          </Button>
        </Container>
      </Background>
    </>
  );
}
