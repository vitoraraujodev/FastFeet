import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`;

export const ProblemsContainer = styled.View`
  width: 85%;
  top: ${Math.round(Dimensions.get('window').height) * 0.1}px;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Problems = styled.FlatList.attrs({
  contentContainerStyle: { paddingTop: 10 },
})`
  width: 100%;
  margin-bottom: 54px;
`;

export const Problem = styled.View`
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 6px;
  padding: 12px 18px;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  color: #666;
  font-size: 16px;
`;

export const ProblemDate = styled.Text`
  text-align: right;
  color: #c1c1c1;
  font-size: 12px;
`;

export const Empty = styled.View`
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const EmptyText = styled.Text`
  color: #999;
  font-size: 18px;
  text-align: center;
`;

export const Loading = styled.View`
  flex: 1;
  align-items: center;

  justify-content: center;
`;
