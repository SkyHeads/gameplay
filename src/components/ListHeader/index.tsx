import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  title: string;
  subTitle: string;
}

export const ListHeader: React.FC<Props> = ({ title, subTitle }) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        { title }
      </Text>

      <Text style={styles.subTitle}>
        { subTitle }
      </Text>
    </View>
  );
}
