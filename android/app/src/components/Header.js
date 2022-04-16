import React from 'react';
import {
    View,
    Text,
    StyleSheet,
}
    from 'react-native';

const styles = StyleSheet.create({
    view: {
        width:'100%',
        height: 100,
        backgroundColor: '#00f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    text: {
        fontSize:25,
        fontWeight:'bold', 
        color:'#ffffff',
    }

})

const Header = (props) => {
    return (
        <View style={styles.view}>
            <Text  style={styles.text}>
        Hi, I'm Manu learning React Native Course.
            </Text>
        </View>
    )
}

export default Header;