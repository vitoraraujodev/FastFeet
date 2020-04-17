import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Content, InputContainer, Input } from './styles';

import api from '~/services/api';

import Header from '~/components/Header';
import Button from '~/components/Button';

export default function New({ route, navigation }) {
  const { delivery } = route.params;

  const [description, setDescription] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`delivery/${delivery.id}/problems`, { description });
      navigation.goBack();
    } catch (err) {
      Alert.alert(
        'Erro!',
        'Não foi possível enviar a descrição do problema. Tente mais tarde.'
      );
    }
  }

  return (
    <Container>
      <Header navigation={navigation}>Informar problema</Header>
      <Content>
        <InputContainer>
          <Input
            textAlignVertical="top"
            placeholder="Inclua aqui o problema que ocorreu na entrega"
            multiline
            numberOfLines={6}
            returnKeyType="send"
            value={description}
            onChangeText={setDescription}
          />
        </InputContainer>
        <Button onPress={handleSubmit} background="#7D40E7">
          Enviar
        </Button>
      </Content>
    </Container>
  );
}
