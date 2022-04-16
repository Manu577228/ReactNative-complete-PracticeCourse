import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';

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
    }
})

function ScreenA({ navigation, route }) {

    const onPressHandler = () => {
        navigation.navigate('Screen_B');
        // navigation.toggleDrawer();
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Screen A
            </Text>

            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    Go to Screen B
                    {/* Toggle Drawer */}
                </Text>
            </Pressable>
            <Text style={styles.text}>{route.params?.Message}</Text>
        </View>
    )
}

export default ScreenA;