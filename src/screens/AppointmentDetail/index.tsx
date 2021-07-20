import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import BannerImg from '../../assets/banner.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export const AppointmentDetail: React.FC = () => {
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      > 
        <View
          style={styles.bannerContent}
        >
          <Text
            style={styles.title}
          >
            Lendários
          </Text>
          <Text
            style={styles.subTitle}
          >
            É hoje que vamos chegar ao challenger sem perder uma partida de md10
          </Text>
        </View>
      </ImageBackground>
    </Background>
  );
}
