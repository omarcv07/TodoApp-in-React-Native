import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import InputTodo from './InputTodo';

const NewTask = (props) => {
  
  return (
      <View style={styles.container}>
        <InputTodo />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30
  },
})
export default NewTask;