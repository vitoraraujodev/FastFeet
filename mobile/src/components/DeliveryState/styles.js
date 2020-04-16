import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  margin: auto;
  padding-top: 8px;
`;

export const LineState = styled.View`
  flex-direction: row;
  align-items: center;
  width: 250px;
  margin: 0 auto;
`;

export const Descriptions = styled.View`
  width: 280px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const DescriptionText = styled.Text`
  color: #999;
  font-size: 8px;
  width: 45px;
  text-align: center;
`;
