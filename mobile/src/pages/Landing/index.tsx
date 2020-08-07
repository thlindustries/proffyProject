import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  LandingImage,
  LandingText,
  BoldTitle,
  ButtonsContainer,
  Study,
  ButtonsImage,
  ButtonText,
  Teach,
  Footer,
  FooterText,
  FooterHeartIcon,
} from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

interface ConnectionResponse {
  total: number;
}

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [connections, setConnections] = useState<ConnectionResponse>();

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigate('GiveClasses');
  }, []);

  const handleNavigateToStudyPage = useCallback(() => {
    navigate('Study');
  }, []);

  useFocusEffect(() => {
    api.get('/connections').then((response) => {
      const total = { total: response.data.length };
      setConnections(total);
    });
  }, []);

  return (
    <Container>
      <LandingImage source={landingImg} />

      <LandingText>
        Seja bem-vindo,
        {'\n'}
        <BoldTitle>O que deseja fazer?</BoldTitle>
      </LandingText>

      <ButtonsContainer>
        <Study onPress={handleNavigateToStudyPage}>
          <ButtonsImage source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </Study>
        <Teach onPress={handleNavigateToGiveClassesPage}>
          <ButtonsImage source={giveClasses} />
          <ButtonText>Dar aulas</ButtonText>
        </Teach>
      </ButtonsContainer>

      <Footer>
        <FooterText>
          {`Total de ${connections?.total} conexões realizadas!`}
          {' '}
          <FooterHeartIcon source={heartIcon} />
        </FooterText>
      </Footer>
    </Container>
  );
};

export default Landing;
