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
    Modal,

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
        textAlign: 'center',
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

    centered_modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },

    warning_modal: {
        width: 300,
        height: 300,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
    },

    warning_title: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
 
    warning_body: {
        height:200,
        justifyContent:'center',
        alignItems:'center',
    },

    warning_button: {
        backgroundColor:'#00ffff',
        borderBotomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
});

const TextInputKeyboard = () => {

    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const onPressHandler = () => {
        if (name.length > 3) {
            setSubmitted(!submitted);
        }
        else {
            setShowWarning(true);
        }
    }

    return (
        <View style={styles.body}>
            <Modal
                visible={showWarning}
                onRequestClose={() =>
                    setShowWarning(false)
                }
                animationType='slide'
                hardwareAccelerated
            >
                <View style={styles.centered_modal}>
                    <View style={styles.warning_modal}>
                        <View style={styles.warning_title}>
                            <Text style={styles.text}>WARNING!</Text>
                        </View>
                        <View style={styles.warning_body}>
                            <Text style={styles.text}>The name must be longer than 3 characters</Text>
                        </View>
                        <Pressable
                        onPress={() => setShowWarning(false)}
                        style={styles.warning_button}
                        android_ripple={{color:'#fff'}}
                        >
                            <Text style={styles.text}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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