import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default Book = ({ details }) => (
  <View style={styles.bookEntry}>
    <Text>Title: {details.title}</Text>
    <Text>Author: {details.author}</Text>
  </View>
)


