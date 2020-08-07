import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface FavoriteProps {
  like: boolean;
}

export const Container = styled.View`
  background-color: #fff;

  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;

  margin-bottom: 16px;
  overflow: hidden;
`;

export const Teacher = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 20px;

  color: #32264d;
`;

export const Subject = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 12px;

  margin-top: 4px;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;

  border-radius: 32px;

  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Biography = styled.Text`
  margin-horizontal: 24px;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

export const Footer = styled.View`
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`;

export const PriceContent = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 14px;
`;

export const Price = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #8257e5;
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(RectButton) <FavoriteProps>`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  ${(props) =>
    props.like
      ? css`
          background-color: #e33d3d;
        `
      : css`
          background-color: #8257e5;
        `}
`;

export const ContactButton = styled(RectButton)`
  background-color: #04d361;
  flex: 1;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`;
