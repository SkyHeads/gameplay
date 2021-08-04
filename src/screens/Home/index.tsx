import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Appointments } from '../../components/Appointments';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

export const Home: React.FC = () => {
  const { user } = useAuth();

  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '02/07 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Yeah, boy',
        icon: null,
        owner: false,
      },
      category: '3',
      date: '02/07 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '3',
      guild: {
        id: '3',
        name: 'Rumo ao topo',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '02/07 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ];

  const handleCategorySelect = useCallback(
    (categoryId: string) => {
      categoryId === category ? setCategory('') : setCategory(categoryId);
    },
    [category],
  );

  const handleAppointmentDetail = useCallback(() => {
    navigation.navigate('AppointmentDetail');
  }, [navigation]);

  const handleAppointmentCreate = useCallback(() => {
    navigation.navigate('AppointmentCreate');
  }, [navigation]);

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
        hasCheckBox={false}
      />

      <ListHeader title="Partidas agendadas" subTitle="Total 6" />

      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointments data={item} onPress={handleAppointmentDetail} />
        )}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
      />
    </Background>
  );
};
