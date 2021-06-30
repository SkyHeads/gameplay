import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export const ButtonIcon: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <RectButton style={styles.container}  {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}
