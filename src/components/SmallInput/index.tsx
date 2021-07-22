import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export const SmallInput: React.FC<TextInputProps> = ({ ...rest }) => (
  <TextInput style={styles.container} {...rest} keyboardType="numeric" />
);
