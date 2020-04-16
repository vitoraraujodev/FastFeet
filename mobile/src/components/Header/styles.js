import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  background: #7d40e7;
  top: 0;
  left: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
  height: 20%;
`;

export const Back = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
