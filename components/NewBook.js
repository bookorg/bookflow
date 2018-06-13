import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';
import { ImagePicker, Permissions } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  rowContainer: {
      flex: 1,
      flexDirection: 'row',
  },
  text: {
    color: 'black', fontSize: 12 
  }
});

class NewBook extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            quality: 1,
            yearReleased: 2015
        }
    }
    static navigationOptions = ({ navigation }) => {
        const {state} = navigation;
        return {
          title: 'New Book',
        };
      };
    _pickImage = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === 'granted') {
          let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
          });
          
          console.log(result);
    
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
        }
      };
  render() {
    return (
      <View style={styles.container}>
        <Button style={{ marginTop: 20 }} title="Add picture" onPress={() => this._pickImage()}/>      
        <View style={styles.rowContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Title</Text>
                <TextInput
                style={styles.text}
                placeholder="Title of the Book"
                onChangeText={(text) => this.setState({title: text})}
                />
            </View>
            <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center' }}>
                {this.state.image &&
                <Image source={{ uri: this.state.image }} style={{ width: 100, height: 100 }} />}
            </View>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Description</Text>
            <TextInput
            style={styles.text}
            placeholder="Description of the Book"
            onChangeText={(text) => this.setState({description: text})}
            />
        </View>
        <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Quality</Text>
            <Picker
                selectedValue={this.state.quality}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => this.setState({quality: itemValue})}>
                <Picker.Item label="Low" value="1" />
                <Picker.Item label="Medium" value="2" />
                <Picker.Item label="Good" value="3" />
            </Picker>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Year Released</Text>
            <Picker
                selectedValue={this.state.yearReleased}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => this.setState({yearReleased: itemValue})}>
                <Picker.Item label="2015" value="2015" />
                <Picker.Item label="2016" value="2016" />
                <Picker.Item label="2017" value="2017" />
            </Picker>
        </View>
        </View>
        <Button title='Submit' onPress={() => this.props.createNewBook(this.state)} />
      </View>
      
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    createNewBook: (book) => {
        dispatch({
        type: 'ADD_BOOK',
        book: book
        })
        ownProps.navigation.navigate('MyBooks');
    }
})

export default connect(null, mapDispatchToProps)(NewBook)
