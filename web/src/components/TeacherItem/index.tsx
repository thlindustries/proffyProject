import React, { useCallback } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import {
  Container,
  HeaderContent,
  NameNSubject,
  FooterContent,
} from './styles';
import api from '../../services/api';

export interface Teacher {
  classes: Array<{
    id: string;
    subject: string;
    cost: number;
  }>;
  user: {
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    id: string;
  };
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const handleNewConnection = useCallback(() => {
    api.post('/connections', {
      user_id: teacher.user.id,
    });
  }, [teacher.user.id]);

  return (
    <Container>
      <HeaderContent>
        <img src={teacher.user.avatar} alt={teacher.user.name} />
        <NameNSubject>
          <strong>{teacher.user.name}</strong>
          {teacher.classes.map((item) => (
            <span key={`${item.id}s2`}>{item.subject}</span>
          ))}
        </NameNSubject>
      </HeaderContent>

      <p>
        Cara doidão que curte levar uns choques !
        <br />
        <br />
        Louco pra dar choque em alguem e ensinar as pessoas a construirem uma
        bubina de tesla, esse cara manja muito de arcos elétricos !
      </p>
      <FooterContent>
        <p>
          Preço/hora
          {teacher.classes.map((item) => {
          console.log(teacher.user.whatsapp);
          return <strong key={item.id}>{`R$ ${item.cost},00`}</strong>;
        })}
        </p>
        <a
          onClick={handleNewConnection}
          target="_blank"
          href={`https://wa.me/${teacher.user.whatsapp}?text=To querendo comprar seu carro malandro`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </FooterContent>
    </Container>
  );
};

export default TeacherItem;
