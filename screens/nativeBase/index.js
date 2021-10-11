import React, { useState } from 'react';
import { View, Platform, ScrollView, StyleSheet } from 'react-native';
import { Button, Collapse, Box, Alert, VStack, HStack, Text, IconButton, CloseIcon } from 'native-base';

const NativeBase = ({ navigation }) => {
    const [show, setShow] = useState(false)

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.tittle}>NativeBase</Text>
                <Text style={styles.tittlePlatform}>{Platform.OS}</Text>
                <Text>
                    {'\n'}
                    {'\n'}
                </Text>
                <Collapse isOpen={show}>
                    <Alert w="100%" status="success">
                        <VStack space={1} flexShrink={1} w="100%">
                            <HStack
                                flexShrink={1}
                                space={2}
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <HStack flexShrink={1} space={2} alignItems="center">
                                    <Alert.Icon />
                                    <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        _dark={{
                                            color: "coolGray.800",
                                        }}
                                    >
                                        Selection successfully moved!
                                    </Text>
                                </HStack>
                                <IconButton
                                    variant="unstyled"
                                    icon={<CloseIcon size="3" color="coolGray.600" />}
                                    onPress={() => setShow(false)}
                                />
                            </HStack>
                            <Box
                                pl="6"
                                _dark={{
                                    _text: {
                                        color: "coolGray.600",
                                    },
                                }}
                            >
                                Your coupon could not be processed at this time.
                            </Box>
                        </VStack>
                    </Alert>
                </Collapse>
                <Button
                    size="sm"
                    colorScheme="secondary" onPress={() => { if (show) { setShow(false) } else { setShow(true) } }}
                >
                    ALERTS
                </Button>
                <Text>
                    {'\n'}
                </Text>
                <Button
                    size="sm"
                    variant="subtle" onPress={() => console.log('hello world')}
                >
                    PRIMARY
                </Button>
                <Text>
                    {'\n'}
                </Text>
                <Button
                    size="sm"
                    variant="outline"
                    colorScheme="secondary" onPress={() => console.log('hello world')}
                >
                    SECONDARY
                </Button>

                <Text>
                    {'\n'}
                    {'\n'}
                </Text>
                <Button title="Home" onPress={() => navigation.navigate('Home')} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
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
    input: {
        backgroundColor: '#c5ced8',
        borderRadius: 10,
        fontSize: 20,
    },
});

export default NativeBase;
