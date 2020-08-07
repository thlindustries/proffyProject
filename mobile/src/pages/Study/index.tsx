import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { DayItems, SubjectItems } from './itemArrays';

import {
  Container,
  Items,
  SearchForm,
  Label,
  GenericInput,
  GroupInput,
  InputBlockView,
  FilterButton,
  FilterText,
  TimePicker,
  Search,
  SearchText,
} from './styles';

import { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

const Study: React.FC = () => {
  const [collapseFilters, setCollapseFilters] = useState(true);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [timeText, setTimeText] = useState('');

  const [favorites, setFavorites] = useState<string[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favTeachers = JSON.parse(response);
        const favTeachersID = favTeachers.map(
          (teacher: Teacher) => teacher.user.id,
        );
        setFavorites(favTeachersID);
      }
    });
  }, []);

  const handleOppenFilter = useCallback(() => {
    setCollapseFilters(!collapseFilters);
  }, [collapseFilters]);

  const handleSelectDate = useCallback((date: Date | undefined) => {
    if (!date) {
      alert('Ooops, é necessário selecionar uma data');
      return;
    }

    const formatedTime = `${date.getHours()}:${date.getMinutes()}`;
    setShowTimePicker(false);
    setTimeText(formatedTime);
  }, []);

  const handleSubmitFilter = useCallback(() => {
    loadFavorites();

    const filter = {
      subject,
      week_day,
      time: timeText,
    };

    api
      .get('/classes', {
        params: filter,
      })
      .then((response) => {
        const foundTeacher = [response.data as Teacher];
        setTeachers([...foundTeacher]);
      })
      .catch(() => {
        setTeachers([]);
      });

    setCollapseFilters(true);
  }, [subject, week_day, timeText]);

  return (
    <Container>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={
          <FilterButton onPress={handleOppenFilter}>
            <Icon
              name={collapseFilters ? 'filter' : 'arrow-up'}
              size={20}
              color="#04d361"
            />
            <FilterText>Filtrar</FilterText>
          </FilterButton>
        }
      >
        <SearchForm collapsed={collapseFilters}>
          <Label>Matéria</Label>
          <GenericInput
            selectedValue={subject}
            onValueChange={(value) => {
              setSubject(value as string);
            }}
            style={{ color: '#c1bccc', borderRadius: 8 }}
          >
            <GenericInput.Item
              label="Qual a matéria?"
              value="Qual a matéria?"
            />
            {SubjectItems.map((item) => (
              <GenericInput.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </GenericInput>

          <GroupInput>
            <InputBlockView>
              <Label>Dia da semana</Label>
              <GenericInput
                selectedValue={week_day}
                onValueChange={(value) => {
                  setWeekDay(value as string);
                }}
                style={{ color: '#c1bccc', borderRadius: 8 }}
              >
                <GenericInput.Item label="Qual o dia?" value="Qual o dia?" />
                {DayItems.map((item) => (
                  <GenericInput.Item
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </GenericInput>
            </InputBlockView>

            <InputBlockView>
              <Label>Horário</Label>
              <TimePicker onPress={() => setShowTimePicker(true)}>
                <Label>{timeText || 'Qual o horário?'}</Label>
              </TimePicker>
              {showTimePicker && (
                <DateTimePicker
                  value={new Date()}
                  mode="time"
                  onChange={(event, value) => handleSelectDate(value)}
                />
              )}
            </InputBlockView>
          </GroupInput>
          <Search onPress={handleSubmitFilter}>
            <SearchText>Pesquisar</SearchText>
          </Search>
        </SearchForm>
      </PageHeader>
      <Items
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((item: Teacher) => {
          return (
            <TeacherItem
              key={item.user.id}
              teacher={item}
              favorited={favorites.includes(item.user.id)}
            />
          );
        })}
      </Items>
    </Container>
  );
};

export default Study;
