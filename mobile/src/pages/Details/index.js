import React from 'react';
import { Alert, View, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format, parseISO } from 'date-fns';

import {
  Container,
  Scroll,
  ContentContainer,
  ContainerTitle,
  Title,
  ContentInfo,
  ContentValue,
  Actions,
  ActionContainer,
  Action,
  ActionText,
} from './styles';

import api from '~/services/api';

import Header from '~/components/Header';

export default function Details({ route, navigation }) {
  const { delivery } = route.params;
  const profile = useSelector((state) => state.user.profile);

  async function handleTakeAway() {
    try {
      await api.post('takeaway', {
        delivery_id: delivery.id,
        deliveryman_id: profile.id,
      });
      navigation.navigate('Dashboard');
      Alert.alert('Sucesso!', 'Sua encomenda foi retirada!');
    } catch (err) {
      Alert.alert(
        'Erro!',
        'Não foi possível retirar sua encomenda. Tente novamente.'
      );
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />

      <Container>
        <Header navigation={navigation}>Detalhes da encomenda</Header>
        <Scroll showsVerticalScrollIndicator={false}>
          <ContentContainer>
            <ContainerTitle>
              <Icon name="truck" size={21} color="#7D40E7" />
              <Title>Informações da entrega</Title>
            </ContainerTitle>
            <ContentInfo>DESTINATÁRIO</ContentInfo>
            <ContentValue>{delivery.recipient.name}</ContentValue>
            <ContentInfo>ENDEREÇO DE ENTREGA</ContentInfo>
            <ContentValue>
              {delivery.recipient.rua}, {delivery.recipient.numero},{' '}
              {delivery.recipient.cidade} - {delivery.recipient.estado},{'\n '}
              {delivery.recipient.cep}
            </ContentValue>

            <ContentInfo>PRODUTO</ContentInfo>
            <ContentValue style={{ marginBottom: 0 }}>
              {delivery.product}
            </ContentValue>
          </ContentContainer>

          <ContentContainer>
            <ContainerTitle>
              <Icon name="calendar" size={21} color="#7D40E7" />
              <Title>Situação da entrega</Title>
            </ContainerTitle>
            <ContentInfo>STATUS</ContentInfo>
            <ContentValue>{delivery.recipient.name}</ContentValue>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View>
                <ContentInfo>DATA DE RETIRADA</ContentInfo>
                <ContentValue style={{ marginBottom: 0 }}>
                  {delivery.start_date
                    ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
                    : '--/--/--'}
                </ContentValue>
              </View>
              <View>
                <ContentInfo>DATA DE ENTREGA</ContentInfo>
                <ContentValue style={{ marginBottom: 0 }}>
                  {delivery.end_date
                    ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
                    : '-- / -- / --'}
                </ContentValue>
              </View>
            </View>
          </ContentContainer>

          {!delivery.end_date ? (
            <Actions>
              <ActionContainer
                underlayColor="#e4e8f7"
                onPress={() => navigation.navigate('NewProblem', { delivery })}
              >
                <Action>
                  <Icon name="close-circle-outline" size={20} color="#E74040" />
                  <ActionText>Informar Problemas</ActionText>
                </Action>
              </ActionContainer>
              <ActionContainer
                underlayColor="#e4e8f7"
                onPress={() => navigation.navigate('ListProblem', { delivery })}
              >
                <Action>
                  <Icon name="information-outline" size={20} color="#E7BA40" />
                  <ActionText>Visualizar Problemas</ActionText>
                </Action>
              </ActionContainer>
              {delivery.start_date ? (
                <ActionContainer
                  underlayColor="#e4e8f7"
                  onPress={() => navigation.navigate('Confirm', { delivery })}
                >
                  <Action>
                    <Icon
                      name="check-circle-outline"
                      size={20}
                      color="#7D40E7"
                    />
                    <ActionText>Confirmar Entrega</ActionText>
                  </Action>
                </ActionContainer>
              ) : (
                <ActionContainer
                  underlayColor="#e4e8f7"
                  onPress={handleTakeAway}
                >
                  <Action>
                    <Icon
                      name="chevron-up-box-outline"
                      size={20}
                      color="#7D40E7"
                    />
                    <ActionText>Retirar para Entrega</ActionText>
                  </Action>
                </ActionContainer>
              )}
            </Actions>
          ) : null}
        </Scroll>
      </Container>
    </>
  );
}
