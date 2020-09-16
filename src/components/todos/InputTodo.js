import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'
import { handleAddTodo } from '../../store/actions/actionCreators'

const InputTodo = (props) => {

    const { handleAddTodo, text } = props;
    const [value, setValue] = useState(text)

    useEffect(() => {
        props.navigation.setParams({ handleParamsTodo: handleTodo })
    })

    const handleTodo = (text) => {
        handleAddTodo(text)
        setValue('')
    }

    return (
        <View style={styles.containerInput}>
            <Input
                label='What is to be done'
                placeholder='Enter Task Here'
                labelStyle={styles.labelStyle}
                onChangeText={() => {
                    setValue(value)
                    handleTodo(value)
                }}
            />
        </View>
    );
}

const mapStateToProps = state => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = dispatch => ({
    handleAddTodo: (todo) => dispatch(handleAddTodo(todo))
})

// <TouchableOpacity  onPress={() => handleTodo(value)}>
// <View style={styles.containerButton}>
//     <MaterialCommunityIcons name='plus' size={30} style={styles.buttonStyle} />
// </View>
// </TouchableOpacity>

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


export default connect(mapStateToProps, mapDispatchToProps)(InputTodo)