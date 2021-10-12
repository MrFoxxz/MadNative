import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, ScrollView, Image, Platform, StyleSheet, Text, Button } from 'react-native';

const CallApiScreen = ({ navigation }) => {
    const [testImages, setTestImages] = useState([]);

    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random/3').then(response => {
            let data = response.data.message;
            setTestImages(data);
        });
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.tittle}>Prueba de API</Text>
                <Text style={styles.platformTittle}>{Platform.OS}</Text>
                <Text>
                    {'\n'}
                    {'\n'}
                </Text>
                {testImages.map(img => {
                    return (
                        <Image
                            key={img}
                            style={styles.tinyLogo}
                            source={{
                                uri: img,
                            }}
                        />)
                })}
                <Button title="Home" onPress={() => navigation.navigate('Home')} />
            </View>
        </ScrollView>
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
    tinyLogo: {
        width: 200,
        height: 200,
        margin: 10,
        alignSelf: 'center'
    },
    platformTittle: {
        alignSelf: 'center',
        color: Platform.OS === 'ios' ? 'grey' : 'green',
        fontSize: 30,
      },
    input: {
        backgroundColor: '#c5ced8',
        borderRadius: 10,
        fontSize: 20,
    },
});

export default CallApiScreen;
