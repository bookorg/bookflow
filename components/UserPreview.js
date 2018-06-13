import React from 'react';
import { View, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import { TouchableHighlight } from 'react-native';
import BookDetail from './BookDetail';
import BookPreview from './BookPreview';

class UserPreview extends React.Component {
  render() {
      return (
        <View style={styles.bookEntry}>
            <Text style={{color: 'black', fontSize: 12}}>{this.props.user.username}</Text> 
            <Text style={{color: 'black', fontSize: 12}}>{this.props.user.phoneNumber}</Text> 
            <Text style={{color: 'black', fontSize: 12}}>-----------------</Text> 

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
