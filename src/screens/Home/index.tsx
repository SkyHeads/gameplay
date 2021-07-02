import React, { useState, useCallback } from 'react';
import { 
  View,
  Text,
  FlatList
} from 'react-native';
import { Appointments } from '../../components/Appointments';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export const Home: React.FC = () => {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '02/07 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Yeah, boy',
        icon: null,
        owner: false
      },
      category: '3',
      date: '02/07 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '3',
      guild: {
        id: '3',
        name: 'Rumo ao topo',
        icon: null,
        owner: true
      },
      category: '1',
      date: '02/07 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  const handleCategorySelect = useCallback((categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }, []);

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect} 
      />

      <ListHeader 
        title="Partidas agendadas"
        subTitle="Total 6"
      />

      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Appointments data={item} />
        )}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
      />
    </Background>
  );
}
