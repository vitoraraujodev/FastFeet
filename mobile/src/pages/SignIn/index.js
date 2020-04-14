import React, { useState } from 'react';
import { Background, Input } from './styles';

import Logo from '~/assets/fastfeet-logo.svg';

import Button from '~/components/Button';

export default function SignIn() {
  const [id, setId] = useState('');

  const loading = false;

  function handleSubmit() {}

  return (
    <Background>
      <Logo width={250} height={50} />
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="send"
        value={id}
        onChangeText={setId}
        placeholder="Informe seu ID de cadastro"
      />
      <Button loading={loading} onPress={handleSubmit} background="#82BF18">
        Entrar no sistema
      </Button>
    </Background>
  );
}
