import React, { useState, useEffect } from 'react';
import { Alert, StatusBar, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// account-circle, check-circle-outline, close-circle-outline, reorder-horizontal, information-outline, truck, calendar, checkbox-blank-circle, checkbox-blank-circle-outline
import {
  Container,
  DeliverymanContainer,
  Avatar,
  DeliverymanInfo,
  DeliverymanWelcome,
  DeliverymanName,
  DeliverymanLogout,
  TitleContainer,
  Title,
  DeliveryOptions,
  Option,
  Deliveries,
  DeliveryContainer,
  DeliveryTitleContainer,
  DeliveryTitle,
  DeliveryInfos,
  DeliveryInfoTitle,
  DeliveryInfoValue,
  DetailsText,
} from './styles';

import DeliveryState from '~/components/DeliveryState';

import { signOut } from '~/store/modules/auth/actions';

import api from '~/services/api';

export default function Dashboard() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const [deliveries, setDeliveries] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPendent, setShowPendent] = useState(true);

  async function loadDeliveries() {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await api.get(`deliveryman/${profile.id}/takeaway`);
      setDeliveries(response.data);
    } catch (err) {
      Alert.alert(
        'Erro!',
        'Não foi possível carregar as suas encomendas. Tente novamente.'
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    loadDeliveries();
  }, []);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Container>
        <DeliverymanContainer>
          <Avatar
            source={{
              uri: profile.avatar
                ? profile.avatar.url
                : 'https://ui-avatars.com/api/?rounded=true&name=vitor+araujo&background=F4EFFC&color=a28fd0',
            }}
          />
          <DeliverymanInfo>
            <DeliverymanWelcome>Bem vindo(a) de volta,</DeliverymanWelcome>
            {profile ? <DeliverymanName>{profile.name}</DeliverymanName> : null}
          </DeliverymanInfo>
          <DeliverymanLogout onPress={handleSignOut}>
            <Icon name="login-variant" size={20} color="#E74040" />
          </DeliverymanLogout>
        </DeliverymanContainer>

        <TitleContainer>
          <Title>Entregas</Title>
          <DeliveryOptions>
            <TouchableOpacity onPress={() => setShowPendent(true)}>
              <Option selected={showPendent}>Pendentes</Option>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowPendent(false)}>
              <Option selected={!showPendent}>Entregues</Option>
            </TouchableOpacity>
          </DeliveryOptions>
        </TitleContainer>
        {deliveries ? (
          <Deliveries
            data={deliveries}
            keyExtractor={(delivery) => String(delivery.id)}
            renderItem={({ item: delivery }) => (
              <DeliveryContainer>
                <DeliveryTitleContainer>
                  <Icon name="truck" size={22} color="#7D40E7" />
                  <DeliveryTitle>Encomenda {delivery.id}</DeliveryTitle>
                </DeliveryTitleContainer>

                <DeliveryState delivery={delivery} />

                <DeliveryInfos>
                  <View>
                    <DeliveryInfoTitle>Data</DeliveryInfoTitle>
                    <DeliveryInfoValue>
                      {format(parseISO(delivery.created_at), 'dd/MM/yyyy')}
                    </DeliveryInfoValue>
                  </View>
                  <View>
                    <DeliveryInfoTitle>Cidade</DeliveryInfoTitle>
                    <DeliveryInfoValue>
                      {delivery.recipient.cidade}
                    </DeliveryInfoValue>
                  </View>
                  <TouchableOpacity>
                    <DeliveryInfoTitle />
                    <DetailsText>Ver detalhes</DetailsText>
                  </TouchableOpacity>
                </DeliveryInfos>
              </DeliveryContainer>
            )}
          />
        ) : null}
      </Container>
    </>
  );
}
