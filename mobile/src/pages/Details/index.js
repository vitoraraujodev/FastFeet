import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

export default function Details({ navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('NewProblem')}>
        <Text>NewProblem</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListProblem')}>
        <Text>ListProblem</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Confirm')}>
        <Text>Confirm</Text>
      </TouchableOpacity>
    </Container>
  );
}
