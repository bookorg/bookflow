import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';

export default MainScreen = ( { navigation } ) => {
  return(
    <View style={styles.container}>
      <Text>Welcome to the MainScreen</Text>
      <Button onPress={() => navigation.navigate('BookList')} title="go to BookList" />
    </View>
  )
}

