import React, { useState, useEffect, useRef } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

import {
  Container,
  CameraWrapper,
  CameraButtonWrapper,
  CameraButton,
  Preview,
  CancelButtonWrapper,
  CancelButton,
  SubmitButton,
} from './styles';

import api from '~/services/api';

import Header from '~/components/Header';

export default function Confirm({ navigation, route }) {
  const { delivery } = route.params;
  const profile = useSelector((state) => state.user.profile);

  const [loading, setLoading] = useState(false);
  const [loadingPicture, setLoadingPicture] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [picture, setPicture] = useState(null);

  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    setLoadingPicture(true);

    if (cameraRef) {
      const options = { quality: 0.4, base64: true };
      const photo = await cameraRef.current.takePictureAsync(options);
      setPicture(photo.uri);
    }
    setLoadingPicture(false);
  };

  async function handleSubmit() {
    if (!picture) {
      return;
    }
    setLoading(true);
    try {
      const data = new FormData();

      const uriParts = picture.split('.');
      const fileType = uriParts[uriParts.length - 1];

      data.append('file', {
        uri: picture,
        name: `signature-delivery-${delivery.id}.${fileType}`,
        type: `image/${fileType}`,
      });

      const response = await api.post('files', data);

      const signature_id = response.data.id;
      const deliveryman_id = profile.id;
      const delivery_id = delivery.id;

      await api.post(`arrival`, {
        deliveryman_id,
        delivery_id,
        signature_id,
      });

      Alert.alert('Sucesso!', 'Sua entrega foi confirmada!');

      navigation.navigate('Dashboard');
    } catch (err) {
      console.tron.log(err);
      Alert.alert(
        'Erro!',
        'Não foi possível confirmar sua entrega. Tente novamente.'
      );
    }
    setLoading(false);
  }

  return (
    <Container>
      <Header navigation={navigation}>Confirmar entrega</Header>
      {hasPermission ? (
        <>
          <CameraWrapper>
            {!picture ? (
              <Camera
                ref={cameraRef}
                type={type}
                style={{ flex: 1 }}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
                captureAudio={false}
              >
                <View
                  style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
                  <CameraButtonWrapper>
                    <CameraButton onPress={() => takePicture()}>
                      {loadingPicture ? (
                        <ActivityIndicator size="large" color="#ddd" />
                      ) : (
                        <Icon name="camera" size={30} color="#fff" />
                      )}
                    </CameraButton>
                  </CameraButtonWrapper>
                </View>
              </Camera>
            ) : (
              <>
                <Preview source={{ uri: picture }} />
                <CancelButtonWrapper>
                  <CancelButton onPress={() => setPicture(null)}>
                    <Icon name="cancel" size={30} color="#fff" />
                  </CancelButton>
                </CancelButtonWrapper>
              </>
            )}
          </CameraWrapper>

          <SubmitButton
            loading={loading}
            onPress={handleSubmit}
            background="#7D40E7"
          >
            Enviar
          </SubmitButton>
        </>
      ) : null}
    </Container>
  );
}
