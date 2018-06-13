import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { TouchableHighlight } from 'react-native';
import BookDetail from './BookDetail';
import BookPreview from './BookPreview';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {color: 'black', fontSize: 12}
})
 
class UserPreview extends React.Component {
    _handlePress = () => {
        Linking.openURL('sms:' + this.props.user.phoneNumber);
        this.props.onPress && this.props.onPress();
    }
  render() {
      return (
        <View style={styles.container}>
            <Text style={styles.text}>{this.props.user.username}</Text> 
            <Text style={styles.text} 
                // onPress={this._handlePress()}
                //TODO implement send sms onPress
            >{this.props.user.phoneNumber}</Text> 
            <Text style={styles.text}>-----------------</Text> 

        {this.props.user.books.map((book) => {
            return (
            <TouchableHighlight
                key={book.id}
                onPress={() => this.props.navigation.navigate('BookDetail', { detail: book })}
            >
                <BookPreview book={book} />
                
            </TouchableHighlight>)
        })}
        </View>
      )
  }
}

const mapStateToProps = state => ({
    details: state.users.users,
});

export default withNavigation(connect(mapStateToProps)(UserPreview));
