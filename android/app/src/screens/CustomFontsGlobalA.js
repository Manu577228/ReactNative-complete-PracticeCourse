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

function CustomFontsGlobal_A({ navigation, route }) {


    const onPressHandler = () => {
        navigation.navigate('CustomFontsGlobal_B');
        // navigation.toggleDrawer();
      
    }

    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
                ]}
                >
                Screen A
            </Text>

            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    Go to screen B
                    {/* Toggle Drawer */}
                </Text>
            </Pressable>
            <Text style={styles.text}>{route?.Message}</Text>
        </View>
    )
}

export default CustomFontsGlobal_A;