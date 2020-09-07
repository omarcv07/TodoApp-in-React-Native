import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = (props) => {

    const { children } = props;

    return (
        <View style={styles.header}>
            <Text style={styles.title}>asd</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#005fc4'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'       
    }
})

export default Header; 