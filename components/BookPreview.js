import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  text: {
    flex: 1,
    color: 'black', 
    fontSize: 12,
    //TODO move text to center of image
  },
  image: {
    flex: 1,
    width: 50, 
    height: 50
  },
});

class BookPreview extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <Text>
            <Image
              style={styles.image}
              source={{uri: this.props.book.image}}
            />
            <Text style={styles.text}>{this.props.book.title}</Text>
          </Text>
        </View>
      )
  }
}

export default BookPreview;
