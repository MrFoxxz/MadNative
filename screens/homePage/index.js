import React from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>MAD NATIVE APP</Text>
      <Text style={styles.tittle}>{Platform.OS}</Text>
      <Text>
        {'\n'}
        {'\n'}
      </Text>
      <Button
        title="Mapa"
        color="black"
        onPress={() => navigation.navigate('Mapa')}
      />
      <Button
        title="Permisos"
        color="red"
        onPress={() => navigation.navigate('Permisos')}
      />
      <Button
        title="CallApi"
        color="black"
        onPress={() => navigation.navigate('CallApi')}
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

export default HomePage;
