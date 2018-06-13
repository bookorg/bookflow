import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';

class BookPreview extends React.Component {
  render() {
      return (
        <View>
        <Text style={{color: 'black', fontSize: 12}}>{this.props.book.title}</Text>
        <Image
        style={{width: 50, height: 50}}
        source={{uri: this.props.book.image}}
        />
        </View>
      )
  }
}

export default BookPreview;
