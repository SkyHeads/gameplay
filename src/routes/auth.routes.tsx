import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetail } from '../screens/AppointmentDetail';
import { AppointmentCreate } from '../screens/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes: React.FC = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: theme.colors.secondary100,
      },
    }}
  >
    <Screen name="SigIn" component={SignIn} />
    <Screen name="Home" component={Home} />
    <Screen name="AppointmentDetail" component={AppointmentDetail} />
    <Screen name="AppointmentCreate" component={AppointmentCreate} />
  </Navigator>
);
