import React, { useState, useCallback } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Image } from 'react-native';
import {
  Container,
  Teacher,
  Subject,
  Profile,
  Avatar,
  ProfileInfo,
  Biography,
  Footer,
  PriceContent,
  Price,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
} from './styles';

import favoriteIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
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
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorite, setIsFavorite] = useState(favorited);

  const handleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorite) {
      const favIndex = favoritesArray.findIndex(
        (teacherItem: Teacher) => teacherItem.user.id === teacher.user.id,
      );

      favoritesArray.splice(favIndex, 1);
    } else {
      favoritesArray.push(teacher);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    setIsFavorite(!isFavorite);
  }, [isFavorite]);

  const handleLinkToWhatsapp = useCallback(() => {
    Linking.openURL(
      `whatsapp://send?text=Salve mano, de boa?!&phone=+55${teacher.user.whatsapp}`,
    );

    api.post('/connections', {
      user_id: teacher.user.id,
    });
  }, []);

  return (
    <Container>
      <Profile>
        <Avatar
          source={{
            uri: teacher.user.avatar,
          }}
        />
        <ProfileInfo>
          <Teacher>{teacher.user.name}</Teacher>
          {teacher.classes.map((item) => (
            <Subject key={item.id}>{item.subject}</Subject>
          ))}
        </ProfileInfo>
      </Profile>
      <Biography>{teacher.user.bio}</Biography>
      <Footer>
        <PriceContent>
          Preço/hora {'   '}
          {teacher.classes.map((item) => (
            <Price key={item.cost}>
              R$
              {item.cost}
              ,00
            </Price>
          ))}
        </PriceContent>
        <ButtonsContainer>
          <FavoriteButton onPress={handleFavorite} like={isFavorite}>
            <Image source={isFavorite ? unFavoriteIcon : favoriteIcon} />
          </FavoriteButton>
          <ContactButton onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
