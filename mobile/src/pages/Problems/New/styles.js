import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`;

export const Content = styled.View`
  width: 85%;
  top: ${Math.round(Dimensions.get('window').height) * 0.1}px;
`;

export const InputContainer = styled.View`
  background: #fff;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  font-size: 16px;
  justify-content: flex-start;
  color: #444;
`;
