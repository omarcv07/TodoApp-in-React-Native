import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import MainTodo from '../container/MainTodo';
import NewTask from '../components/todos/NewTask'
import TaskDetails from '../components/todos/TaskDetails'

const Stack = createStackNavigator();

const MapStack = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#005fc4'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff',
                },
            }}>
            <Stack.Screen 
                name='Home' 
                component={MainTodo} 
                options={{
                    headerTitle: 'Home',
                }}
            />             
            <Stack.Screen 
                name='NewTask' 
                component={NewTask} 
                options={{
                    headerTitle: 'New Task',
                }}
            />
            <Stack.Screen 
                name='TaskDetails' 
                component={TaskDetails} 
                options={{
                    headerTitle: 'Task Details',
                }}
            />
        </Stack.Navigator>
     );
}

export default HomeStackScreen;