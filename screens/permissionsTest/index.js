import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const PermissionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>PRUEBA DE PERMISOS</Text>
      <Button
        title="CAMARA"
        color="black"
        onPress={() => console.log('CAMARA')}
      />
      <Button
        title="LOCALIZACION"
        color="red"
        onPress={() => console.log('LOCALIZACION')}
      />
      <Button
        title="DOCUMENTOS"
        color="black"
        onPress={() => console.log('DOCUMENTOS')}
      />
      <Button
        title="SOLICITAR MULTIPLES PERMISOS"
        color="red"
        onPress={() => console.log('SOLICITAR MULTIPLES PERMISOS')}
      />
      <Button
        title="VER PERMISOS CONCEDIDOS"
        color="black"
        onPress={() => console.log('VER PERMISOS CONCEDIDOS')}
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
