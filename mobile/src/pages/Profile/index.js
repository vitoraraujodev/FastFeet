import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import {
  Container,
  Avatar,
  ProfileInfo,
  ProfileValue,
  LogoutButton,
} from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: profile.avatar
            ? profile.avatar.url
            : 'https://ui-avatars.com/api/?rounded=true&name=vitor+araujo&background=F4EFFC&color=a28fd0',
        }}
      />
      <ProfileInfo>Nome Completo</ProfileInfo>
      <ProfileValue>{profile.name}</ProfileValue>
      <ProfileInfo>E-mail</ProfileInfo>
      <ProfileValue>{profile.email}</ProfileValue>
      <ProfileInfo>Data de Cadastro</ProfileInfo>
      <ProfileValue>
        {format(parseISO(profile.created_at), 'dd/MM/yyyy')}
      </ProfileValue>
      <LogoutButton background="#E74040" onPress={handleSignOut}>
        Logout
      </LogoutButton>
    </Container>
  );
}
