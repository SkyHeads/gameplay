import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export const GuildIcon: React.FC = () => {
  const uri = 'https://esportalliance.com/media/com_easysocial/photos/116/146/aa6762ce460d34033ae950b48d4ee59f_large.png';

  return (
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}
