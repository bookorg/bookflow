import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

export default class BookUpload extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Would you like to upload a book? </Text>
        <Button
          title="Pick an image"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

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
}