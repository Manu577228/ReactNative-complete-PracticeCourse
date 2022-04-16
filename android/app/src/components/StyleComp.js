import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 10,
        borderRadius: 10,
    },

    text: {
        color: '#000000',
        fontSize: 40,
        fontStyle: 'italic',
        margin: 10,
        textTransform: 'uppercase'
    },

    button: {
        width: 150,
        height: 60,
    },

});


const StateHook = () => {

    const [name, setName] = useState('style test')

    const onClickHandler = () => {
        setName('style test is done')
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>{name}</Text>
            <View style={styles.button}>
            <Button title='Update State' onPress={onClickHandler}></Button>
            </View>
        </View>
    );
};

export default StateHook;