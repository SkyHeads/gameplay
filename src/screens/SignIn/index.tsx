import React, { useCallback } from 'react';
import { View, Text, Image, Alert } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';
import { useAuth } from '../../hooks/auth';

export const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const handleSignIn = useCallback(async () => {
    try {
      signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }, [signIn]);

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
