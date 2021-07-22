import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';

import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState('');

  return (
    <Background>
      <Header
        title="Agendar Partida"
      />

      <ListHeader
        title="Categoria" 
      />

      <View style={{ marginTop: 14 }}>
        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />
      </View>


      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              // <View style={styles.image} />
              <GuildIcon />
            }
            <View style={styles.selectBody}>
              <Text style={styles.selectBodyLabel}>
                Selecione um servidor
              </Text>
            </View>

            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
      </View>
    </Background>
  );
}
