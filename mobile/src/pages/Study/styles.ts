import styled from 'styled-components/native';
import Collapsible from 'react-native-collapsible';

import { RectButton } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';

export const Container = styled.View`
  flex: 1;

  background-color: #f0f0f7;
`;

export const Items = styled.ScrollView`
  margin-top: -30px;
`;

export const FilterButton = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 12px;
  margin-bottom: 12px;
  width: 25%;

  margin: 0 0 0 auto;
`;

export const FilterText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 16px;
  color: #fff;

  margin-left: 12px;
`;

export const SearchForm = styled(Collapsible)`
  margin-bottom: 24px;
  margin-top: 8px;
`;

export const Label = styled.Text`
  color: #c1bccc;
  font-family: 'Poppins_400Regular';
`;

export const GenericInput = styled(Picker)`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;

  justify-content: center;
  padding-horizontal: 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const TimePicker = styled(RectButton)`
  height: 54px;
  background-color: #fff;

  justify-content: center;
  padding-horizontal: 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const GroupInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlockView = styled.View`
  width: 48%;
`;

export const Search = styled(RectButton)`
  background-color: #04d361;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 12px;
`;

export const SearchText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 16px;
`;
