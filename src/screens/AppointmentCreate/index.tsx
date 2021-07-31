import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { GuildProps } from '../../components/Guild';

export const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const handleOpenGuilds = useCallback(() => {
    setOpenGuildsModal(true);
  }, []);

  const handleCloseGuilds = useCallback(() => {
    setOpenGuildsModal(false);
  }, []);

  const handleGuildSelect = useCallback((guildSelect: GuildProps) => {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }, []);

  const handleCategorySelect = useCallback((categoryId: string) => {
    setCategory(categoryId);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar Partida" />

          <ListHeader title="Categoria" />

          <View style={{ marginTop: 14 }}>
            <CategorySelect
              hasCheckBox
              setCategory={handleCategorySelect}
              categorySelected={category}
            />
          </View>

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}
                <View style={styles.selectBody}>
                  <Text style={styles.selectBodyLabel}>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.selectBodyLabel, { marginBottom: 12 }]}>
                  Dia e Mês
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.selectBodyLabel, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.selectBodyLabel}>Descrição</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </ScrollView>

        <ModalView visible={openGuildsModal}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: 378,
              top: 10,
            }}
            onPress={handleCloseGuilds}
          >
            <Feather
              name="x-circle"
              size={24}
              color={theme.colors.secondary30}
            />
          </TouchableOpacity>

          <Guilds handleGuildSelected={handleGuildSelect} />
        </ModalView>
      </Background>
    </KeyboardAvoidingView>
  );
};
