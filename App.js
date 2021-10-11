/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import type {Node} from 'react';
//SCREENS
import HomePage from './screens/homePage';
import PermissionScreen from './screens/permissionsTest';
import MapScreen from './screens/map';
import CallApiScreen from './screens/callApi/index.js';
import NativeBase from './screens/nativeBase';

import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Mapa"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Permisos"
            component={PermissionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CallApi"
            component={CallApiScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NativeBase"
            component={NativeBase}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
