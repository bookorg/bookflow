import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import BookDetail from './BookDetail';
import BookPreview from './BookPreview';
import Communications from 'react-native-communications';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    phoneNumberText: {
        color: 'blue',
    },
    text: {color: 'black', fontSize: 12}
})
 
class UserPreview extends React.Component {
  render() {
      return (
        <View style={styles.container}>
            <Text style={styles.text}>{this.props.user.username}</Text> 
            <TouchableOpacity onPress={() => Communications.text(this.props.user.phoneNumber)}>
                <Text style={styles.phoneNumberText}>
                    {this.props.user.phoneNumber}
                </Text> 
            </TouchableOpacity>
            <Text style={styles.text}>-----------------</Text> 

        {this.props.user.books.length > 0 ? this.props.user.books.map((book) => {
            return (
            <TouchableOpacity
                key={book.id}
                onPress={() => this.props.navigation.navigate('BookDetail', { detail: book })}
            >
                <BookPreview book={book} />
                
            </TouchableOpacity>)
        }) : <Text>No books added yet!</Text>}
        </View>
      )
  }
}

const mapStateToProps = state => ({
    details: state.users.users,
});

export default withNavigation(connect(mapStateToProps)(UserPreview));
