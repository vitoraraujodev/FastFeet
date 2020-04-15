import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const AppStack = createStackNavigator();

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {signed ? (
          <AppStack.Screen name="Dashboard" component={Dashboard} />
        ) : (
          <AppStack.Screen name="SignIn" component={SignIn} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
