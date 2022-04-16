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

function ScreenB({ navigation, route }) {

    const {ItemName, ItemId} = route.params;

    const onPressHandler = () => {
        navigation.navigate('Screen_A', { Message: 'message from B'}); 
        // navigation.goBack();
        // navigation.setParams({ ItemId: 14});
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
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
            <Text style={styles.text}>{ItemName}</Text>
            <Text style={styles.text}>ID: {ItemId}</Text>
        </View>
    )
}

export default ScreenB;