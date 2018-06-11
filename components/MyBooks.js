import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import BookUpload from './BookUpload';
import Book from './Book';

const data = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    title: 'Burma',
    author: 'Benedict Rogers',
  },
  {
    title: 'Thinking',
    author: 'John Brockman',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
  {
    title: 'The Innovator\'s Method',
    author: 'Nathan Furr, Jeff Dyer',
  },
]

export default MyBooks = () => (
  <View style={styles.container}>
    <Text>Welcome to My Books!</Text>
    <FlatList 
      data={data}
      renderItem={({item}) => <Book details={item}/>}/>
    <BookUpload />
  </View>
)

