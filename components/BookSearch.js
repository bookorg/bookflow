import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';

class BookSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      loading: true,
    }
  }

  async componentDidMount() {
    const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=search+dogs');
    const data = await response.json();
    const { items } = data;
    this.setState({
      books: items,
      loading: false,
    })
  }

  render() {
    console.log(this.state.books);
    const elements = this.state.books.map((item, index) => ({ title: item.volumeInfo.title, author: item.volumeInfo.authors }));
    console.log(elements);
    return (
      <View style={styles.container}>
        <Text>Welcome to BookSearch!</Text>
        <FlatList 
          data={elements}
          renderItem={({item}) => (<Book details={item}/>)}
        />
      </View>
    );
  }
}

export default BookSearch;