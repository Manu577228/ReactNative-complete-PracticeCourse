import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color:'white',
    fontSize:20,
    fontStyle:'italic',
    margin:10,
  },
});


const IntroNative = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Portfolio of Manu Bharadwaj BN</Text>
      <Button title='Manu-Portfolio' onPress={()=>{Linking.openURL('https://manubharadwaj-portfolio-ddc86.web.app')}}></Button>
    </View>
  );
};

export default IntroNative;