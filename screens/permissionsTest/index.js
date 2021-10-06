import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {
  requestCameraPermission,
  requestStoragePermission,
  requestLocationPermission,
  requestMultiplePermission,
  checkMultiplePermissions,
} from '../../permissions/index';

const PermissionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>PRUEBA DE PERMISOS</Text>
      <Button
        title="CAMARA"
        color="black"
        onPress={() => requestCameraPermission()}
      />
      <Button
        title="LOCALIZACION"
        color="red"
        onPress={() => requestLocationPermission()}
      />
      <Button
        title="DOCUMENTOS"
        color="black"
        onPress={() => requestStoragePermission()}
      />
      <Button
        title="SOLICITAR MULTIPLES PERMISOS"
        color="red"
        onPress={() => requestMultiplePermission()}
      />
      <Button
        title="VER PERMISOS CONCEDIDOS"
        color="black"
        onPress={() => checkMultiplePermissions()}
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
  text: {
    fontSize: 20,
  },
});

export default PermissionScreen;
