import React, { useState, useEffect, useCallback } from 'react';
import {
  ImageBackground,
  Text,
  View,
  FlatList,
  Alert,
  Platform,
  Share,
} from 'react-native';
import * as Linking from 'expo-linking';

import { BorderlessButton } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import BannerImg from '../../assets/banner.png';
import { api } from '../../services/api';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Background } from '../../components/Background';
import { AppointmentProps } from '../../components/Appointments';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Member, MemberProps } from '../../components/Member';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Load } from '../../components/Load';

type Params = {
  guildSelect: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export const AppointmentDetail: React.FC = () => {
  const route = useRoute();

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);
  const { guildSelect } = route.params as Params;

  const fetchGuildWidget = useCallback(async () => {
    try {
      const response = await api.get(
        `/guilds/${guildSelect.guild.id}/widget.json`,
      );
      setWidget(response.data);
      setLoading(false);
    } catch {
      Alert.alert(
        'Verifique as configurações do servidor. Será que o Widget está habilitado?',
      );
    } finally {
      setLoading(false);
    }
  }, [guildSelect.guild.id]);

  function handleShareInvitation() {
    const message =
      Platform.OS === 'ios'
        ? `Junte-se a ${guildSelect.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, [fetchGuildWidget]);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelect.guild.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelect.guild.name}</Text>
          <Text style={styles.subTitle}>{guildSelect.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subTitle={`Total ${widget.members.length}`}
          />

          <FlatList
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
            contentContainerStyle={{ paddingBottom: 15 }}
          />
        </>
      )}

      {guildSelect.guild.owner && (
        <View style={styles.buttonFooter}>
          <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
        </View>
      )}
    </Background>
  );
};
