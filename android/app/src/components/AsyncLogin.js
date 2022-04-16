import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,

} from 'react-native';
import CustomComponentsAndProps from './CustomComponentsAndProps';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },

    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },

    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130,
    },

    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
})

export default function AsyncLogin({ navigation }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('Home');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                  Name: name,
                  Age: age
                }
                await AsyncStorage.setItem('UserName', JSON.stringify(user));
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={require('../../../../assets/asyncstorage.jpg')}
            />

            <Text style={styles.text}>
                Async Storage
            </Text>

            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => setName(value)}
            />

            <TextInput
                style={styles.input}
                placeholder='Enter your Age'
                onChangeText={(value) => setAge(value)}
            />

            <CustomComponentsAndProps
                title='Login'
                onPressFunction={setData}
            />
        </View>
    )
}