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
      
    },

    text: {
        color: '#000000',
        fontSize: 15,
        margin:10,
        textTransform: 'uppercase'
    },

});


const StateHook = () => {

    const [name, setName] = useState('Manu')
    const [session, setSession] = useState({ number: 6, title: 'state' })
    const [current, setCurrent] = useState(true)

    const onPressHandler = () => {
        setName('Manu Bharadwaj BN')
        setSession({ number: 7, title: 'Style' })
        setCurrent(false);
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>My name is {name}</Text>
            <Text style={styles.text}>This is session number {session.number} and about {session.title}.</Text>
            <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
            <Button style={styles.button} title='Update State' onPress={onPressHandler}></Button>
        </View>
    );
};

export default StateHook;