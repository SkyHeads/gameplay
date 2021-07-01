import React from 'react';
import { View, Text } from 'react-native';

import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export const Category: React.FC<Props> = ({ 
  title, 
  icon: Icon, 
  checked = false, 
  ...rest 
}) => {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check} />
         
          <Icon width={48} height={48} />

          <Text style={styles.title}>
            { title }
          </Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}

