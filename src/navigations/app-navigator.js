import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MainTodo from '../container/MainTodo';
import MainMap from '../container/MainMap';
import HomeStackScreen from '../screens/TodoScreen'

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
            activeTintColor: '#007bff',
        }}
        >
            <Tab.Screen
                name='Home'
                component={HomeStackScreen}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name='home' color={color} size={size} />
                ),
                }}
            />
            <Tab.Screen
                name='Map'
                component={MainMap}
                options={{
                tabBarLabel: 'Location',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name={'map-marker'} color={color} size={size} />
                ),
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;