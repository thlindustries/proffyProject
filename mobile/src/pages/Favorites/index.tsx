import React, { useCallback, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { Teacher } from '../../components/TeacherItem';
import { Container, Items } from './styles';

const Study: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favTeachers = JSON.parse(response);

        setFavorites(favTeachers);
      }
    });
  }, []);

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <Container>
      <PageHeader title="Meus proffys Favoritos" />
      <Items
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((item: Teacher) => (
          <TeacherItem key={item.user.id} teacher={item} favorited />
        ))}
      </Items>
    </Container>
  );
};

export default Study;
