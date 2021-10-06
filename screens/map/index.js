import React from 'react';
import {View, Platform, StyleSheet, Text, Button} from 'react-native';

const MapScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>MapScreen</Text>
      <Text style={styles.tittle}>{Platform.OS}</Text>
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
