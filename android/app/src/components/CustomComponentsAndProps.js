import React from 'react';
import {
View,
Text,
StyleSheet,
Pressable,

 } 
 from 'react-native';
 
const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
    },

    button: {
        width: 150,
        height: 50,
        backgroundColor:'#1eb900',
        alignItems:'center',
        margin:10,
    },


})

const CustomComponentsAndProps = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right:10, left:10 }}
            style={styles.button}
            android_ripple={{ color: '#00f' }}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </Pressable>
    )
}

export default CustomComponentsAndProps;
