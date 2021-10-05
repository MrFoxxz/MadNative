import React from 'react';
import {View, Text, Button} from 'react-native';

const MapScreen = ({navigation}) => {
  return (
    <View>
      <Text>MapScreen</Text>
      <Button
        title="Home"
        color="blue"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default MapScreen;
