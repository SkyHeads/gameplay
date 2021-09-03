import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { AppointmentProps } from '../../components/Appointments';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Member } from '../../components/Member';
import { ButtonIcon } from '../../components/ButtonIcon';

import BannerImg from '../../assets/banner.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Params = {
  guildSelect: AppointmentProps;
};

export const AppointmentDetail: React.FC = () => {
  const route = useRoute();

  const { guildSelect } = route.params as Params;

  const members = [
    {
      id: '1',
      username: 'Bruno',
      avatar_url: 'https://github.com/SkyHeads.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Bruno',
      avatar_url: 'https://github.com/SkyHeads.png',
      status: 'offline',
    },
    {
      id: '3',
      username: 'Bruno',
      avatar_url: 'https://github.com/SkyHeads.png',
      status: 'offline',
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelect.guild.name}</Text>
          <Text style={styles.subTitle}>{guildSelect.description}</Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subTitle="Total de 3" />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
        contentContainerStyle={{ paddingBottom: 15 }}
      />

      <View style={styles.buttonFooter}>
        <ButtonIcon
          title="Entrar na partida"
          onPress={() => console.log('AppointmentDetail Button')}
        />
      </View>
    </Background>
  );
};
