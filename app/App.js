import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CamaraScreen from './screens/CamaraScreen';
import TestScreen from './screens/TestScreen';
import DatosScreen from './screens/DatosScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Test" component={TestScreen} />
        <Tab.Screen name="Camara" component={CamaraScreen} />
        <Tab.Screen name="Datos" component={DatosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
