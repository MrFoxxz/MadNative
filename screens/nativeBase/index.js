import React, { useState, useEffect } from 'react';
import { View, Platform, StyleSheet, ScrollView } from 'react-native';
//LIBRERIA DE ESTILOS
import { Input, Icon, Button, TextArea, Select, Text, Checkbox, HStack } from "native-base"


const NativeBase = ({ navigation }) => {
    const [data, setData] = useState({
        name: "",
        document: null,
        email: "",
        password: "",
        checked: false,
        text: "",
    })
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <ScrollView >
            <View style={styles.container}>
                <Input
                   
                    placeholder="Name"
                  /*   onChange={(event) => {
                        console.log("TARGET" , event.target)
                        console.log("TEXTO" , event.target.value)
                    } */
                    onChangeText={(value) => console.log("valor" , value)}
                />
                <Select
                    selectedValue={data.document}
                    style={styles.passwordInput}
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
                    mt={1}
                    onValueChange={(itemValue) => setData({ ...data, document: itemValue })}
                >
                    <Select.Item label="Cedula ciudadania" value="Cedula ciudadania" />
                    <Select.Item label="Pasaporte" value="Pasaporte" />
                    <Select.Item label="Cedula extranjera" value="Cedula extranjera" />
                    <Select.Item label="Permiso de permanencia" value="Permiso de permanencia" />
                </Select>
                <Input style={styles.input} placeholder="email"
                />
                <Input
                    style={styles.passwordInput}
                    type={show ? "text" : "password"}
                    overflow="visible"

                    InputRightElement={
                        <Icon
                            size={5}
                            onPress={handleClick}
                            mr="2"
                            color="muted.400"
                        />
                    }
                    placeholder="Password"
                />
                <TextArea
                    placeholder="Text Area Placeholder"
                    style={styles.input}
                />
                <HStack style={styles.input} alignItems="center" space={6}>
                    <Text >Leiste los terminos y condiciones?</Text>
                    <Checkbox
                        size="md"
                        value={true}
                        onChange={(values) => {
                            setData({ ...data, checked: values })
                        }}
                        accessibilityLabel="This is a dummy checkbox"
                    />
                </HStack>
                <Button size="lg" onPress={() => console.log(data)}>Ingresar datos</Button>
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
    input: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        padding: 0
    },
    passwordInput: {
        fontSize: 20,
        padding: 0
    },
});

export default NativeBase;
