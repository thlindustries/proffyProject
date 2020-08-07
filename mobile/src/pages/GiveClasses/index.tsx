import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ImageBackground,
  Title,
  Description,
  ContinueButton,
  ContinueButtonText,
} from './styles';

import backgroundImg from '../../assets/images/give-classes-background.png';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <ImageBackground resizeMode="contain" source={backgroundImg}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </ImageBackground>
      <ContinueButton onPress={goBack}>
        <ContinueButtonText>Tudo bem</ContinueButtonText>
      </ContinueButton>
    </Container>
  );
};

export default GiveClasses;
