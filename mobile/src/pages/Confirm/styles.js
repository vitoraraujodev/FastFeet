import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: center;
`;

export const CameraWrapper = styled.View`
  flex: 1;
  width: 85%;
  margin: auto;
  border-radius: 6px;
  margin-top: ${Dimensions.get('window').height * 0.1}px;
  padding: 2px;
  background: #f8f9fd;
  margin-bottom: 30px;
`;

export const CameraButtonWrapper = styled.View`
  height: 60px;
  width: 60px;
  opacity: 0.6;
  background: #666;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  bottom: 20px;
`;

export const CameraButton = styled.TouchableOpacity``;

export const Preview = styled.Image`
  flex: 1;
  background: #ddd;
`;

export const CancelButtonWrapper = styled.View`
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  background: #666;
  bottom: 20px;
  left: ${Dimensions.get('window').width / 2 - 60}px;
`;

export const CancelButton = styled.TouchableOpacity``;

export const SubmitButton = styled(Button)`
  width: 85%;
  margin: 0 auto;
  bottom: 15px;
`;
