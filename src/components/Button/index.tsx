import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
};

export const Button: React.FC<Props> = ({ title, ...rest }) => (
  <RectButton style={styles.container} {...rest}>
    <Text style={styles.title}>{title}</Text>
  </RectButton>
);
