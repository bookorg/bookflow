import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import BookUpload from './BookUpload';
import { connect } from 'react-redux';
import BookPreview from './BookPreview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
  },
});

class MyBooks extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: 'My Books',
      headerLeft: null
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.books}
          renderItem={({item}) => 
          <View style={{ flexDirection: 'row' }}>
            <BookPreview book={item}/>
            <View style={{ justifyContent: 'center' }} >
              <Button title="🗑" onPress={() => this.props.deleteBook(item.id)} /> 
            </View>
          </View>
          }
          
        />
        <Button title={`✚ Add New Book`} onPress={() => this.props.navigation.navigate('NewBook')}></Button>
        {/* <UploadFile /> */}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  books: state.users.users[0].books,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: (bookId) => dispatch({
    type: 'DELETE_BOOK',
    bookId,
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks) // export the connected version of your component

