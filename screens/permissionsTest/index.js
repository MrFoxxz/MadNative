import React from 'react';
import {View, Text, Button} from 'react-native';

const PermissionScreen = ({navigation}) => {
  return (
    <View>
      <Text>PermissionScreen</Text>
      <Button
        title="Home"
        color="blue"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default PermissionScreen;
