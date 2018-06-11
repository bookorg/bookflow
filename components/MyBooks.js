import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import BookUpload from './BookUpload';

export default MyBooks = () => (
  <View style={styles.container}>
    <Text>Welcome to My Books!</Text>
    <BookUpload />
  </View>
)
