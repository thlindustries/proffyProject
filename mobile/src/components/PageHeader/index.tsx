import React, { useCallback, ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Image } from 'react-native';
import { Container, TopBar, BackButton, Title, Header } from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface HeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<HeaderProps> = ({
  title,
  children,
  headerRight,
}) => {
  const { navigate } = useNavigation();

  const handleBackToLandingPage = useCallback(() => {
    navigate('Landing');
  }, []);

  return (
    <Container>
      <TopBar>
        <BackButton onPress={handleBackToLandingPage}>
          <Image source={backIcon} resizeMode="contain" />
        </BackButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>
      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>
      {children}
    </Container>
  );
};

export default PageHeader;
