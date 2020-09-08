import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import Header from '../components/header';
import AddTodo from '../components/todos/AddTodo';
import TodoList from '../components/todos/TodoList';

const MainTodo = (props) => {

    const { navigate } = props.navigation

    return(
      <ScrollView>
        <View>
          <AddTodo />
          <TodoList />
        </View>
        <View style={styles.iconButton}>  
          <Icon
            raised
            reverse 
            name={'plus'}
            type='font-awesome'
            color='#001ac4'
            onPress={() => navigate('New Task')}
            />
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  containerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconButton:  {
    position: 'absolute',
    top: 0,
    right: 0,
  }
})

export default MainTodo;