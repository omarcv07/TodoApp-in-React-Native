import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Input } from 'react-native-elements'
import { connect } from 'react-redux';

const RenderTodoDetails = (props) => {

    const { todo } = props;

    const renderTodoDetailItem = ({ item, index }) => {
        return(
            <View key={index} style={styles.container}>
                <Input
                    label='What is to be done'
                    placeholder='Enter Task Here'
                    value={item.todo}
                    labelStyle={styles.labelStyle}
                />
            </View>
        );
    }

    return (
        <ScrollView>
            <FlatList
                data={todo}
                renderItem={renderTodoDetailItem}
                keyExtractor={item => item.id}
                />
        </ScrollView>
    );
}

const TaskDetails = (props) => {

    const { todo } = props;
    const todoId = props.route.params.todoId;

    return (
        <View>
            <RenderTodoDetails todo={todo.filter(todos => todos.id === todoId)} />
        </View>
    );
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 30
    },
    labelStyle: {
        color: '#005fc4'
    }
})

export default connect(mapStateToProps)(TaskDetails);