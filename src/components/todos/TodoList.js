import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

const TodoList = (props) => {

    const { todo, navigate } = props;

    const renderTodos = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} onPress={() => navigate('TaskDetails', { todoId: item.id })}>
                <Card>
                    <Text style={{ fontSize: 14 }}>{item.todo}</Text>
                </Card>
            </TouchableOpacity>
        );
    }
    console.log(todo)
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