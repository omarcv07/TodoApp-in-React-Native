import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DetailsButtonNavigation = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
        <Button
          title="Go to Detaiasdlsdsdsdsdsdsdsdsdsdsdsds"
          onPress={() => navigation.navigate('details')}
        />
      </View>
    );
  }

export default DetailsButtonNavigation