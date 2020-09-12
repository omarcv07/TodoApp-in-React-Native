import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import Header from '../components/header';
import TodoList from '../components/todos/TodoList';

const MainTodo = (props) => {

    const { navigate } = props.navigation

    return(
        <View style={styles.container}>
          <ScrollView>
            <TodoList navigate={navigate} />
          </ScrollView>
          <View style={styles.iconButton}>  
            <Icon
              raised
              reverse 
              name={'plus'}
              type='font-awesome'
              color='#001ac4'
              onPress={() => navigate('NewTask')}
              />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },  
  iconButton:  {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 8
  }
})

export default MainTodo;