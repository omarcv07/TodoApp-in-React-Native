import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

const TodoList = (props) => {

    const { todo } = props;

    // const todoId = props.route.params.todoId;

    const renderTodos = ({ item, index }) => {
        return (
            <View key={index} style={{ margin: 10, flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 14 }}>{item.todo}</Text>
                <Text>{item.date}</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList 
                data={todo}
                renderItem={renderTodos}
                keyExtractor={item => item.todo }
            />
        </View>
    )
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default connect(mapStateToProps)(TodoList);