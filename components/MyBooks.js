import React from 'react';
import { View, Text, FlatList } from 'react-native';
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
        data={this.props.users[0].books}
        renderItem={({item}) => <BookPreview book={item}/>}/>
      
      <UploadFile />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps)(MyBooks) // export the connected version of your component

