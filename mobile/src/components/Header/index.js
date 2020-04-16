import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Back, HeaderTitle } from './styles';

export default function Header({ children, navigation }) {
  return (
    <Container>
      <Back onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" color="#fff" size={22} />
      </Back>
      <HeaderTitle>{children}</HeaderTitle>
      <View style={{ width: 40 }} />
    </Container>
  );
}
