import React, { useState, useCallback, useEffect, FormEvent } from 'react';

import { PageTeacherList, HeaderForm, MainContent } from './styles';

import Header from '../../components/PageHeader';
import Input from '../../components/InputBlock';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';

import { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const handleSubmitFilter = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const filter = {
        subject,
        week_day: weekDay,
        time,
      };

      if (!subject || !weekDay || !time) {
        alert('Oops, parece que você esqueceu de preencher algum filtro :/');
        return;
      }

      api
        .get('/classes', {
          params: { ...filter },
        })
        .then((response) => {
          const foundTeacher = [response.data as Teacher];
          setTeachers([...foundTeacher]);
        })
        .catch(() => {
          alert('Oops, parece que nenhum professor da essa aula :(');
        });
    },
    [subject, time, weekDay],
  );

  return (
    <PageTeacherList>
      <Header title="Estes são os professores disponíveis">
        <HeaderForm onSubmit={handleSubmitFilter}>
          <Select
            htmlFor="subject"
            title="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Select
            htmlFor="week_day"
            title="Dia da semana"
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type="time"
            htmlFor="time"
            title="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </HeaderForm>
      </Header>
      <MainContent>
        {teachers.map((item: Teacher) => {
          return <TeacherItem key={item.user.id} teacher={item} />;
        })}
      </MainContent>
    </PageTeacherList>
  );
};

export default TeacherList;
