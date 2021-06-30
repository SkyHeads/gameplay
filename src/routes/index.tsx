import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '../screens/SignIn';
import { AuthRoutes } from './auth.routes';

export function Routes(){
  return(
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}