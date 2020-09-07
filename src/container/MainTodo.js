import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import Header from '../components/header'
import AddTodo from '../components/todos/AddTodo'
import TodoList from '../components/todos/TodoList'
import DetailsButtonNavigation from '../screens/DetailsButtonNav'

const MainTodo = () => {

    return(
      <View>
        <View>
          <AddTodo />
          <TodoList />
          <DetailsButtonNavigation />
        </View>
      </View>
    );
}

export default MainTodo;