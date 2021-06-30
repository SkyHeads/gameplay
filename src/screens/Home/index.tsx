import React from 'react';
import { 
  View,
  Text
} from 'react-native';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export const Home: React.FC = () => {
  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
    </Background>
  );
}
