import React from 'react';
import { View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import MainTodo from '../container/MainTodo';
import NewTask from '../components/todos/NewTask'
import TaskDetails from '../components/todos/TaskDetails'

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
                    headerRight: () => (
                        <Icon
                            reverse 
                            name={'check'}
                            color='#005fc4'
                            type='font-awesome'
                        />
                    )
                }}
            />
            <Stack.Screen 
                name='TaskDetails' 
                component={TaskDetails} 
                options={{
                    headerTitle: 'Task Details',
                    headerRight: () => (
                        <View style={styles.containerIcons}>
                            <Icon
                                reverse 
                                name={'check'}
                                color='#005fc4'
                                type='font-awesome'
                            />
                            <Icon
                                reverse 
                                name={'gear'}
                                color='#005fc4'
                                type='font-awesome'
                            />
                        </View>
                    )
                }}
            />
        </Stack.Navigator>
     );
}

const styles = StyleSheet.create({
    containerIcons: {
        flexDirection: 'row',
    }
})

export default HomeStackScreen;