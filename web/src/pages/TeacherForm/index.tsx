import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import {
  PageTeacherForm,
  MainContent,
  FieldSet,
  StyledTextArea,
  Footer,
  ScheduleItem,
} from './styles';

import Header from '../../components/PageHeader';
import Input from '../../components/InputBlock';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

// interface NewScheduleItem {
//   week_day: number;
//   from: string;
//   to: string;
// }
// [];

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whats, setWhats] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const { goBack } = useHistory();

  const handleAddNewScheduleItem = useCallback(() => {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '8:00 AM', to: '4:00 PM' },
    ]);
  }, [scheduleItems]);

  const handleCreateClass = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const data = {
        name,
        avatar,
        whatsapp: whats,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      };

      api
        .post('/classes', { ...data })
        .then(() => {
          alert('Cadastro realizado com sucesso !');
          goBack();
        })
        .catch((err) => {
          alert('Oops, talvez você tenha esquecido de preencher algo!');
        });

      console.log(data);
    },
    [avatar, bio, cost, goBack, name, scheduleItems, subject, whats],
  );

  const setScheduleItemValue = useCallback(
    (index: number, field: string, value: string) => {
      const newArray = scheduleItems.map((item, iIndex) =>
        index === iIndex ? { ...item, [field]: value } : item,
      );
      setScheduleItems(newArray);
    },
    [scheduleItems],
  );

  return (
    <PageTeacherForm>
      <Header
        title="Que incrivel que você quer dar aulas!"
        description="O primeira passo é preencher este formulário de inscrição."
      />
      <MainContent>
        <form onSubmit={handleCreateClass}>
          <FieldSet>
            <legend>Seus dados</legend>

            <Input
              type="text"
              htmlFor="name"
              title="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              htmlFor="avatar"
              title="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              type="text"
              htmlFor="whatsapp"
              title="WhatsApp"
              value={whats}
              onChange={(e) => setWhats(e.target.value)}
            />
            <StyledTextArea>
              <Textarea
                htmlFor="bio"
                title="Biografia"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </StyledTextArea>
          </FieldSet>

          <FieldSet>
            <legend>Sobre a aula</legend>

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
            <Input
              type="text"
              htmlFor="cost"
              title="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </FieldSet>

          <FieldSet>
            <legend>
              Horários disponíveis
              <button type="button" onClick={handleAddNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((item, index) => (
              <ScheduleItem key={index - 1}>
                <Select
                  htmlFor="week_day"
                  title="Dia da semana"
                  value={item.week_day}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'week_day', e.target.value)
                  }
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
                  value={item.from}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'from', e.target.value)}
                  type="time"
                  htmlFor="from"
                  title="Das"
                />
                <Input
                  value={item.to}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                  type="time"
                  htmlFor="to"
                  title="Até"
                />
              </ScheduleItem>
            ))}
          </FieldSet>

          <Footer>
            <p>
              <img src={warningIcon} alt="Aviso imoportante" />
              Importante!
              <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </Footer>
        </form>
      </MainContent>
    </PageTeacherForm>
  );
};

export default TeacherForm;
