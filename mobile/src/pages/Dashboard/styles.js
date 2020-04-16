import styled from 'styled-components/native';

import Constants from 'expo-constants';

export const Container = styled.View.attrs({
  paddingTop: Constants.statusBarHeight,
})`
  background: #fff;
  flex: 1;
`;

export const DeliverymanContainer = styled.View.attrs({
  marginBottom: Constants.statusBarHeight,
})`
  width: 100%;
  flex-direction: row;
  padding: 0 18px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const DeliverymanInfo = styled.View`
  flex: 1;
  padding-left: 12px;
`;

export const DeliverymanWelcome = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const DeliverymanName = styled.Text`
  font-size: 20px;
  color: #444;
  font-weight: bold;
`;

export const DeliverymanLogout = styled.TouchableOpacity`
  margin-right: 12px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #444;
  font-weight: bold;
`;

export const DeliveryOptions = styled.View`
  flex-direction: row;
`;

export const Option = styled.Text`
  margin: 0 4px;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.selected ? '#7D40E7' : '#999999')};
  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
`;

export const Deliveries = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const DeliveryContainer = styled.View`
  border: 1px solid #f2f2f2;
  border-radius: 6px;
  margin-bottom: 15px;
`;
export const DeliveryTitleContainer = styled.View`
  flex-direction: row;
  padding: 14px;
  align-items: center;
`;

export const DeliveryTitle = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const DeliveryState = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 40px;
`;

export const DeliveryStateLine = styled.View`
  border: 1px solid #7d40e7;
`;

export const DeliveryInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  background: #f8f9fd;
`;

export const DeliveryInfoTitle = styled.Text`
  font-size: 8px;
  color: #999999;
`;

export const DeliveryInfoValue = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444;
`;

export const DetailsText = styled.Text`
  font-size: 12px;
  color: #7d40e7;
  font-weight: bold;
`;
