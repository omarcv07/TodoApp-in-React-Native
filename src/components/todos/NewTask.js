import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddTodo from './AddTodo';

const NewTask = (props) => {
    return (
        <View style={styles.container}>
          <AddTodo />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    margin: 30
  },
})
export default NewTask;