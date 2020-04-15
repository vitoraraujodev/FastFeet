import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Background = styled.View`
  flex: 1;
  background: #7d40e7;
  justify-content: center;
  padding: 25px;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  align-items: center;
  width: 100%;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  width: 100%;
  height: 45px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 16px;
  padding: 0 20px;
  color: #444;
`;
