import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 15 },
})`
  top: 10%;
  width: 85%;
  margin-bottom: 52px;
`;

export const ContentContainer = styled.View`
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 6px;
  padding: 15px 12px;
  margin-bottom: 10px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const ContentInfo = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ContentValue = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-radius: 6px;
  elevation: 1;
`;

export const ActionContainer = styled.TouchableHighlight`
  padding: 20px;
  flex: 1;
  border-right-width: 1px;
  border-right-color: #f2f2f2;
  background: #f8f9fd;
`;

export const Action = styled.View`
  align-items: center;
`;

export const ActionText = styled.Text`
  margin-top: 4px;
  text-align: center;
  font-size: 10px;
  color: #999;
`;
