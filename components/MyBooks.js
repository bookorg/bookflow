import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import BookUpload from './BookUpload';
import { connect } from 'react-redux';
import BookPreview from './BookPreview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    };
  };
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Books!</Text>
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

