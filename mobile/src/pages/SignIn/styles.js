import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background: #7d40e7;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  width: 100%;
  height: 45px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 45px;
  margin-bottom: 16px;
  padding: 0 20px;
  color: #444;
`;
