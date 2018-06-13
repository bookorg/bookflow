import React from 'react';
import { MapView } from 'expo';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import UserPreview from './UserPreview';

const styles = StyleSheet.create({
  container: { flex: 1 },
})

class MapScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: 'Users Network',
    };
  };

  render() {
    
    return (
      <MapView
        style={styles.container}
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
          <MapView.Callout style={styles.callout}>
            
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