import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  subTitle?: string;
};

export const ListHeader: React.FC<Props> = ({ title, subTitle }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>

    <Text style={styles.subTitle}>{subTitle}</Text>
  </View>
);
