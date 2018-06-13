import React from 'react';
import { MapView } from 'expo';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import UserPreview from './UserPreview';

class MapScreen extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 10.762622,
          longitude: 106.660172,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {this.props.users.map((user, index) => (
          <MapView.Marker
            key={user.id}
            coordinate={{latitude: user.location.latitude, longitude: user.location.longitude}}
          >
          {/* <TouchableHighlight onPress={() => this.props.navigation.navigate('UserPreview')}> */}
          <MapView.Callout>
            
            <UserPreview user={user} />
          {/* </TouchableHighlight> */}
          </MapView.Callout>
          </MapView.Marker>)

        )}
        </MapView>

    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps)(MapScreen) // export the connected version of your component