import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actionCreators'

const AddTodo = (props) => {

    const text = ''

    const { addTodo } = props;
    const [value, setValue] = useState('')

    const handleAddTodo = (text) => {
        addTodo(text)
        setValue('')
    }

    return (
        <View style={styles.containerInput}>
            <Input
                label='What is to be done'
                placeholder='Enter Task Here'
                labelStyle={styles.labelStyle}
                onChangeText={(text) => setValue(text)}
            />
            <TouchableOpacity  onPress={() => handleAddTodo(value)}>
                <View style={styles.containerButton}>
                    <MaterialCommunityIcons name='plus' size={30} style={styles.buttonStyle} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => dispatch(addTodo(todo))
})


const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#f2f2e1',
        backgroundColor: '#eaeaea',
        flex: 1,
        height: 50,
        padding: 5
    },
    containerButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaeaea'
    },
    buttonStyle: {
        color: '#de9595',
        padding: 10
    },
    labelStyle: {
        color: '#005fc4'
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)