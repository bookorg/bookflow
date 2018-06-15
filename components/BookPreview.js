import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 5,
    padding: 10
  },
  text: {
    color: 'black', 
    fontSize: 12,
    //TODO move text to center of image
  },
  titleText: {
    fontWeight: 'bold',
  },
  image: {
    width: 50, 
    height: 50
  },
});

const getQualityString = (quality) => {
  switch(quality) {
    case 1: return 'Low';
    case 2: return 'Medium';
    case 3: return 'High';
    case '1': return 'Low';
    case '2': return 'Medium';
    case '3': return 'High';
  }
}

class BookPreview extends React.Component {
  render() {
      return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{uri: this.props.book.image}}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{this.props.book.title}</Text>
              <Text style={styles.text}>{`${getQualityString(this.props.book.quality)} quality`}</Text>
            </View>
        </View>
      )
  }
}

export default BookPreview;
