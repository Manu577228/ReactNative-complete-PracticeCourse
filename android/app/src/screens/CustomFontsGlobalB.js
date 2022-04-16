import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';


const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 40,
        margin: 10,
    }
})

function CustomFontsGlobal_B({ navigation, route }) {

    const onPressHandler = () => {
        navigation.navigate('CustomFontsGlobal_A', { Message: 'message from B'}); 
        // navigation.goBack();
        // navigation.setParams({ ItemId: 14});
    }

    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}
            >
                Screen B
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    Go Back to ScreenA
                </Text>
            </Pressable>
        </View>
    )
}

export default CustomFontsGlobal_B;