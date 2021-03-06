import React, { useState, useEffect } from 'react';
import { View, Platform, ScrollView, StyleSheet, Text, Button } from 'react-native';
//Geolocation
import Geolocation from '@react-native-community/geolocation';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  ProviderPropType,
} from 'react-native-maps';

const MapScreen = ({ navigation }) => {
  const [posicion, setPosicion] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: null,
    longitudeDelta: null,
  });

  useEffect(() => {

    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = position.coords;
        const coords = {
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          accuracy: initialPosition.accuracy,
        };

        const oneDegreeOfLongitudeInMeters = 111.32;
        const circunference = 40075 / 360;

        const latDelta =
          coords.accuracy * (1 / (Math.cos(coords.latitude) * circunference));
        const lonDelta = coords.accuracy / oneDegreeOfLongitudeInMeters;
        setPosicion({
          latitude: coords.latitude.toFixed(4),
          longitude: coords.longitude.toFixed(4),
          latitudeDelta: latDelta.toFixed(4),
          longitudeDelta: lonDelta.toFixed(4),
        });
      },
      error => console.log('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.tittle}>MapScreen</Text>
        <Text style={styles.platformTittle}>{Platform.OS}</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: 4.7110,
            longitude: -74.0721,
            latitudeDelta: 32.0679,
            longitudeDelta: 0.0449,
          }}>
          <Marker
            coordinate={{ latitude: 4.7110, longitude: -74.0721 }}
          />
        </MapView>
      </View>
      <View style={styles.container}>
        <View>
          <Text>MAPA</Text>
          <Text>{'latitude:' + posicion.latitude}</Text>
          <Text>{'longitude:' + posicion.longitude}</Text>
          <Text>{'latitudeDelta:' + posicion.latitudeDelta}</Text>
          <Text>{'longitudeDelta:' + posicion.longitudeDelta}</Text>
        </View>
        <Text>
          {'\n'}
          {'\n'}
        </Text>
        <Button
          title="Home"
          color="blue"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  titleContainer: {
    margin: 20
  },
  mapContainer: {
    height: 350,
    flex: 1,
    display: "flex"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 350,
    width: 'auto',
  },
  tittle: {
    alignSelf: 'center',
    fontSize: 30,
  },
  platformTittle: {
    alignSelf: 'center',
    color: Platform.OS === 'ios' ? 'grey' : 'green',
    fontSize: 30,
  },
  text: {
    fontSize: 20,
  },
  input: {
    backgroundColor: '#c5ced8',
    borderRadius: 10,
    fontSize: 20,
  },
});

export default MapScreen;