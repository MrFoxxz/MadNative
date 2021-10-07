import React from 'react';
import {View, Platform, StyleSheet, Text, Button} from 'react-native';
import {
  requestCameraPermissionAndroid,
  requestStoragePermissionAndroid,
  requestLocationPermissionAndroid,
  requestMultiplePermissionAndroid,
  checkMultiplePermissionsAndroid,
} from '../../permissions/android/index';

const PermissionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>PRUEBA DE PERMISOS</Text>
      <Text style={styles.tittlePlatform}>{Platform.OS}</Text>
      <Text>
        {'\n'}
        {'\n'}
      </Text>
      <Button
        title="CAMARA"
        color="black"
        onPress={() => {
          if (Platform.OS === 'android') {
            requestCameraPermissionAndroid();
          } else if (Platform.OS === 'android') {
            console.log('CAMARA IOS');
          }
        }}
      />
      <Button
        title="LOCALIZACION"
        color={Platform.OS === 'ios' ? 'grey' : 'green'}
        onPress={() => {
          if (Platform.OS === 'android') {
            requestLocationPermissionAndroid();
          } else if (Platform.OS === 'android') {
            console.log('LOCALIZACION IOS');
          }
        }}
      />
      <Button
        title="DOCUMENTOS"
        color="black"
        onPress={() => {
          if (Platform.OS === 'android') {
            requestStoragePermissionAndroid();
          } else if (Platform.OS === 'android') {
            console.log('DOCUMENTOS IOS');
          }
        }}
      />
      <Button
        title="SOLICITAR MULTIPLES PERMISOS"
        color={Platform.OS === 'ios' ? 'grey' : 'green'}
        onPress={() => {
          if (Platform.OS === 'android') {
            requestMultiplePermissionAndroid();
          } else if (Platform.OS === 'android') {
            console.log('SOLICITAR MULTIPLES PERMISOS IOS');
          }
        }}
      />
      <Button
        title="VER PERMISOS CONCEDIDOS"
        color="black"
        onPress={() => {
          if (Platform.OS === 'android') {
            checkMultiplePermissionsAndroid();
          } else if (Platform.OS === 'android') {
            console.log('VER PERMISOS CONCEDIDOS IOS');
          }
        }}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
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
  tittlePlatform: {
    color: Platform.OS === 'ios' ? 'grey' : 'green',
    alignSelf: 'center',
    fontSize: 40,
  },
  text: {
    fontSize: 20,
  },
});

export default PermissionScreen;
