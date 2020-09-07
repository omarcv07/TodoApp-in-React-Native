import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTodo from '../container/MainTodo';
import TodosDetail from '../components/todos/TodosDetail'

const Stack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#005fc4'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff',
                    fontWeight: 'bold'
                },
            }}>
            <Stack.Screen name='Home' component={MainTodo} />             
            <Stack.Screen name='Details' component={TodosDetail} />
        </Stack.Navigator>
     );
}

export default HomeStackScreen;