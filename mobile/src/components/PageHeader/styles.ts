import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #8257e5;
  padding: 40px;
`;
export const TopBar = styled.View`
  background-color: #8257e5;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(BorderlessButton)`
  margin-left: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin-top: 20px;
`;
