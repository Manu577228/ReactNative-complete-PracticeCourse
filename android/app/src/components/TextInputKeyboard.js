import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,

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
        width:200,
        borderWidth:1,
        borderColor: '#555',
        borderRadius:5,
        textAlign:'center',
        fontSize:20,
    },
});

const TextInputKeyboard = () => {

const [name,setName] = useState('')

    return (
     <View style={styles.body}>
         <Text style={styles.text}>
             Please Write your name:
         </Text>
         <TextInput 
         style={styles.input}
         placeholder='e.g. Manu'
         onChangeText={(value) => setName(value)}
        //  multiline            -> provides multi line for texting
        // secureTextEntry       -> convert text into bullets or dots after typing use for passwords.
         />
          <Text style={styles.text}>
             Your name is: {name}
         </Text>
     </View>
    );
};

export default TextInputKeyboard;