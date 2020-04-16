import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Line } from 'react-native-svg';

import { Container, LineState, Descriptions, DescriptionText } from './styles';

export default function DeliveryState({ delivery }) {
  return (
    <Container>
      <LineState>
        <Icon name="checkbox-blank-circle" size={10} color="#7D40E7" />
        <Svg height="9" width="110">
          <Line
            x1="0"
            y1="5"
            x2="125"
            y2="5"
            stroke="#7D40E7"
            strokeWidth="2"
          />
        </Svg>
        <Icon
          name={
            delivery.start_date
              ? 'checkbox-blank-circle'
              : 'checkbox-blank-circle-outline'
          }
          size={10}
          color="#7D40E7"
        />
        <Svg height="9" width="110">
          <Line
            x1="0"
            y1="5"
            x2="125"
            y2="5"
            stroke="#7D40E7"
            strokeWidth="2"
          />
        </Svg>
        <Icon
          name={
            delivery.end_date
              ? 'checkbox-blank-circle'
              : 'checkbox-blank-circle-outline'
          }
          size={10}
          color="#7D40E7"
        />
      </LineState>
      <Descriptions>
        <DescriptionText>Aguardando Retirada</DescriptionText>
        <DescriptionText>Retirada</DescriptionText>
        <DescriptionText>Entregue</DescriptionText>
      </Descriptions>
    </Container>
  );
}
