import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText: {
    color: 'red'
  },
  headingText: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  image: {
    width: 500,
    height: 500
  }
});

class BookDetail extends React.Component {
  render() {
    const bookDetail = this.props.navigation.getParam('detail', '')
    return (
      <View>
        <Text style={styles.headingText}>{bookDetail.title}</Text>
        <Image
          style={styles.image}
          source={{ uri: bookDetail.image }}>
        </Image>

        <Text style={{ color: 'black', fontSize: 12 }}>{bookDetail.description}</Text>
        <Text style={{ color: 'black', fontSize: 12 }}>{bookDetail.quality}</Text>
        <Text style={{ color: 'black', fontSize: 12 }}>{bookDetail.yearReleased}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  detail: state.users.users
});

export default connect(mapStateToProps)(BookDetail)
