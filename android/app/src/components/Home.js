import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomComponentsAndProps from './CustomComponentsAndProps';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    },

    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    },
})

function Home({ navigation, route }) {

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
                        let user = JSON.parse(value);
                        setName(user.Name);
                        setAge(user.Age);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const UpdateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                await AsyncStorage.setItem('UserName', name);
                Alert.alert('Success!', 'Your data has been updated.')
            } catch (error) {
                console.log(error);
            }
        }
    }

    const RemoveData = async () => {

        try {
            await AsyncStorage.clear();
            navigation.navigate('AsyncLogin')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Welcome {name} !
            </Text>

            <Text style={styles.text}>
                your age is {age} !
            </Text>

            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => setName(value)}
            />

            <CustomComponentsAndProps
                title='Update'
                onPressFunction={UpdateData}
            />

            <CustomComponentsAndProps
                title='remove'
                onPressFunction={RemoveData}
            />
        </View>
    )
}

export default Home;