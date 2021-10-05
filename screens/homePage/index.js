import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>MAD NATIVE APP</Text>
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
