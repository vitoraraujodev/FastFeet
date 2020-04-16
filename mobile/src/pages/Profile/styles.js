import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 36px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  margin-bottom: 45px;
`;

export const ProfileInfo = styled.Text`
  color: #666;
  font-size: 12px;
  align-self: flex-start;
`;

export const ProfileValue = styled.Text`
  color: #444;
  font-size: 22px;
  align-self: flex-start;
  font-weight: bold;
  margin-bottom: 14px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 18px;
`;
