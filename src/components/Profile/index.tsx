import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Avatar } from '../Avatar';

import { styles } from './styles';

export const Profile: React.FC = () => {
  return (
    <View style={styles.container}>

      <RectButton
        onPress={() => console.log('Clicou')}
      >
        <Avatar urlImage="https://github.com/skyheads.png" />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            Bruno
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>

    </View>
  );
}
