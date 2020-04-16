import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const AppStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? (
        <>
          <BottomTab.Navigator
            tabBarOptions={{
              activeTintColor: '#7D40E7',
            }}
          >
            <BottomTab.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                tabBarLabel: 'Entregas',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="reorder-horizontal" color={color} size={size} />
                ),
              }}
            />
            <BottomTab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: 'Meu perfil',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="account-circle" color={color} size={size} />
                ),
              }}
            />
          </BottomTab.Navigator>
        </>
      ) : (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="SignIn" component={SignIn} />
        </AppStack.Navigator>
      )}
    </NavigationContainer>
  );
}
