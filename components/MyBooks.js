import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import styles from '../styles/styles';
import BookUpload from './BookUpload';
import Book from './Book';
import UploadFile from './UploadFile';
import { connect } from 'react-redux';
import BookPreview from './BookPreview';

class MyBooks extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Welcome to My Books!</Text>
      <FlatList
        data={this.props.books}
        renderItem={({item}) => <BookPreview book={item}/>}/>
      <Button title='Create new book' onPress={() => this.props.navigation.navigate('NewBook')}></Button>
      {/* <UploadFile /> */}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  books: state.users.users[0].books
});

export default connect(mapStateToProps)(MyBooks) // export the connected version of your component

