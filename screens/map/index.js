import React, { useState, useEffect } from 'react';
import { View, Platform, StyleSheet, Text, Button } from 'react-native';
//Geolocation
import Geolocation from '@react-native-community/geolocation';

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
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: latDelta,
          longitudeDelta: lonDelta,
        });
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>MapScreen</Text>
      <Text style={styles.tittle}>{Platform.OS}</Text>
      <Text>
        {'\n'}
      </Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  tittle: {
    alignSelf: 'center',
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
