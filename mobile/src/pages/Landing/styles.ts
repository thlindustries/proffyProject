import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  justify-content: center;

  background-color: #8257e5;

  padding: 40px;
`;

export const LandingImage = styled.Image`
  align-self: center;

  width: 100%;
  resize-mode: contain;
`;

export const LandingText = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  font-family: 'Poppins_400Regular';
`;

export const BoldTitle = styled.Text`
  font-weight: bold;
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-top: 40px;
`;

export const Study = styled(RectButton)`
  width: 48%;
  height: 150px;

  border-radius: 8px;

  background-color: #9871f5;

  padding: 24px;

  justify-content: space-between;
`;

export const Teach = styled(RectButton)`
  width: 48%;
  height: 150px;

  border-radius: 8px;

  background-color: #04d361;

  padding: 24px;

  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';

  color: #fff;
  font-size: 20px;
`;

export const ButtonsImage = styled.Image``;

export const Footer = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const FooterText = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;

export const FooterHeartIcon = styled.Image`
  margin-right: 90px;

  margin-top: 40px;
`;
