import React, { Children } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Header, TopBarContainer, HeaderContent } from './styles';

interface HeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<HeaderProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Header>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
