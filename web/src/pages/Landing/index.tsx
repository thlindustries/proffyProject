import React, { useEffect, useState } from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeatIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import {
  ButtonsContainer,
  Study,
  GiveClasses,
  TotalConnections,
  LandingPage,
  LandingPageContent,
  LogoContainer,
  HeroImg,
} from './styles';

interface ConnectionResponse {
  total: number;
}

const Landing: React.FC = () => {
  const [connections, setConnections] = useState<ConnectionResponse>();

  useEffect(() => {
    api.get('/connections').then((response: any) => {
      const total = { total: response.data.length };
      setConnections(total);
    });
  }, []);

  return (
    <>
      <LandingPage>
        <LandingPageContent className="container">
          <LogoContainer>
            <img src={logoImg} alt="" />
            <h2>Sua plataforma de estudos online.</h2>
          </LogoContainer>
          <HeroImg src={landingImg} alt="Plataforma de estudos" />

          <ButtonsContainer>
            <Study to="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Study>

            <GiveClasses to="give-classes">
              <img src={giveClassesIcon} alt="Dar aulas" />
              Dar aulas
            </GiveClasses>
          </ButtonsContainer>

          <TotalConnections>
            {connections &&
              `Total de ${connections.total} conexões já realizadas`}
            <img src={purpleHeatIcon} alt="" />
          </TotalConnections>
        </LandingPageContent>
      </LandingPage>
    </>
  );
};

export default Landing;
