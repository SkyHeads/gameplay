import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

export const Guilds: React.FC<Props> = ({ handleGuildSelected }) => {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '2',
      name: 'Galera do game',
      icon: 'image.png',
      owner: false,
    },
    {
      id: '3',
      name: 'Galera do game',
      icon: 'image.png',
      owner: false,
    },
    {
      id: '4',
      name: 'Galera do game',
      icon: 'image.png',
      owner: false,
    },
    {
      id: '5',
      name: 'Galera do game',
      icon: 'image.png',
      owner: false,
    },
    {
      id: '6',
      name: 'Galera do game',
      icon: 'image.png',
      owner: false,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 104 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
      />
    </View>
  );
};
