import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Pressable,
    Alert,
    ToastAndroid,

} from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },

    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
    },

    input: {
        width: 250,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },

    button: {
        width: 200,
        height: 50,
        backgroundColor: '#00ff00',
        alignItems: 'center',
    },
});

const TextInputKeyboard = () => {

    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const onPressHandler = () => {
        if (name.length > 3) {
            setSubmitted(!submitted)
        }
        else {
            // Alert.alert('Warning', 'The name must be longer than 3 characters', [
            // {text:'OK'},
            // {text:'Cancel'},
            // {text:'Donot Show Again'},
            // ],{cancelable: true, })

            ToastAndroid.showWithGravity(
                'The name must be longer than 3 characters',
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
            )
        }
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Please Write your name:
            </Text>

            <TextInput
                style={styles.input}
                placeholder='e.g. Manu'
                onChangeText={(value) => setName(value)}
            />

            <Pressable
                onPress={onPressHandler}
                style={styles.button}
                android_ripple={{ color: '#00f' }}
            >
                <Text style={styles.text}>
                    {submitted ? 'clear' : 'Submit'}
                </Text>
            </Pressable>

            {submitted ?
                <Text style={styles.text}>
                    You are rigistered as : {name}
                </Text>
                :
                null
            }
        </View>
    );
};

export default TextInputKeyboard;