import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Details from './pages/Details';
import Confirm from './pages/Confirm';
import NewProblem from './pages/Problems/New';
import ListProblem from './pages/Problems/List';

const AppStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function DashboardStack() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Dashboard" component={Dashboard} />
      <AppStack.Screen name="Details" component={Details} />
      <AppStack.Screen name="Confirm" component={Confirm} />
      <AppStack.Screen name="NewProblem" component={NewProblem} />
      <AppStack.Screen name="ListProblem" component={ListProblem} />
    </AppStack.Navigator>
  );
}

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
              component={DashboardStack}
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
