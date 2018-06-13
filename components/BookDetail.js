import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111133'
  },
  details: {
    backgroundColor: '#000',
    color: '#fff',
    opacity: 0.9,
    padding: 20,
    textAlign: 'justify',
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
  },
  image: {
    height: 400,
    width: 250,
  },
});

class BookDetail extends React.Component {
  quality = {1: 'Low', 2: 'Medium', 3: 'High'};
  render() {
    const bookDetail = this.props.navigation.getParam('detail', '')
    return (
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>{bookDetail.title} ({this.quality[bookDetail.quality]} Quality) </Text>
        <Image
          style={styles.image}
          source={{ uri: bookDetail.image }}>
        </Image>
        <Text style={styles.details}>{bookDetail.description}</Text>
        <Text style={styles.title}>Published: {bookDetail.yearReleased}</Text>
      </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  detail: state.users.users
});

export default connect(mapStateToProps)(BookDetail)
