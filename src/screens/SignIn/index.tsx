import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

export const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const handleSignIn = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}e organize suas {'\n'}
            Jogatinas
          </Text>

          <Text style={styles.subTitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
};
