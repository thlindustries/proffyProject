import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  justify-content: center;

  background-color: #8257e5;

  padding: 40px;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  line-height: 37px;

  max-width: 180px;

  color: #fff;
  font-family: 'Archivo_700Bold';
`;

export const Description = styled.Text`
  margin-top: 24px;
  max-width: 240px;

  color: #d4c2ff;

  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins_400Regular';
`;

export const ContinueButton = styled(RectButton)`
  width: 290px;
  height: 58px;

  margin-top: 40px;

  background-color: #04d361;
  border-radius: 8px;

  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const ContinueButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 16px;

  color: #fff;
`;
