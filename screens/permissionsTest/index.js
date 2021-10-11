import React from 'react';
import {View, Platform, StyleSheet, Text, Button} from 'react-native';
import {
  requestCameraPermissionAndroid,
  requestStoragePermissionAndroid,
  requestLocationPermissionAndroid,
  requestMultiplePermissionAndroid,
  checkMultiplePermissionsAndroid,
} from '../../permissions/android/index';

import {
  requestCameraPermissionIOS,
  requestMicroPermissionIOS,
  requestMediaLibraryPermissionIOS,
  requestLocationPermissionIOS,
  requestMultiplePermissionIOS,
  checkMultiplePermissionsIOS
} from '../../permissions/ios/index';

const PermissionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>PRUEBA DE PERMISOS</Text>
      <Text style={styles.tittle}>{Platform.OS}</Text>
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
          } else if (Platform.OS === 'ios') {
            requestCameraPermissionIOS();
            
          }
        }}
      />
        <Button
        title="MICROFONO"
        color="black"
        onPress={() => {
          if (Platform.OS === 'android') {
            console.log('Micro');
          } else if (Platform.OS === 'ios') {
            requestMicroPermissionIOS();
            
          }
        }}
      />
      <Button
        title="LOCALIZACION"
        color="red"
        onPress={() => {
          if (Platform.OS === 'android') {
            requestLocationPermissionAndroid();
          } else if (Platform.OS === 'ios') {
            requestLocationPermissionIOS()
          }
        }}
      />
      <Button
        title="DOCUMENTOS"
        color="black"
        onPress={() => {
          if (Platform.OS === 'android') {
            requestStoragePermissionAndroid();
          } else if (Platform.OS === 'ios') {
            requestMediaLibraryPermissionIOS()
          }
        }}
      />
      <Button
        title="SOLICITAR MULTIPLES PERMISOS"
        color="red"
        onPress={() => {
          if (Platform.OS === 'android') {
            requestMultiplePermissionAndroid();
          } else if (Platform.OS === 'ios') {
            requestMultiplePermissionIOS()
          }
        }}
      />
      <Button
        title="VER PERMISOS CONCEDIDOS"
        color="black"
        onPress={() => {
          if (Platform.OS === 'android') {
            checkMultiplePermissionsAndroid();
          } else if (Platform.OS === 'ios') {
            checkMultiplePermissionsIOS()
          }
        }}
      />
      <Button
        title="Home"
        color="red"
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
});

export default PermissionScreen;
