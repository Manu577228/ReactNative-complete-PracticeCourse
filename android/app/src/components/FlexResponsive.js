import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#0000ff',
        alignItems:'stretch',
        justifyContent: 'center',
    },

    view1: {
        flex: 1,
        backgroundColor: '#00ffff',
        justifyContent:'center',
        alignItems:'center',
    },

    view2: {
        flex: 1,
        backgroundColor: '#ff00ff',
        justifyContent:'center',
        alignItems:'center',
    },

    view3: {
        flex: 1,
        backgroundColor: '#ffff00',
        justifyContent:'center',
        alignItems:'center',
    },

    text: {
        color: '#000000',
        fontSize: 40,
        fontStyle: 'italic',
        margin: 10,
    },
});

const ResponsiveUi = () => {
    return (
        <View style={styles.body}>
            <View style={styles.view1}>
                <Text style={styles.text}>1</Text>
            </View>

            <View style={styles.view2}>
                <Text style={styles.text}>2</Text>
            </View>

            <View style={styles.view3}>
                <Text style={styles.text}>3</Text>
            </View>
        </View>
    );
};

export default ResponsiveUi;