import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import AsyncLogin from './AsyncLogin';

const Stack = createStackNavigator();

function ReactNavigation() {
    return (
        <NavigationContainer>
            
            <Stack.Navigator
            initialRouteName='AsyncLogin'
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#0080ff'
                },
                headerTintColor:'#ffffff',
                headerTitleStyle: {
                  fontSize: 25,
                  fontWeight: 'bold'
                }
            }}
            >

                <Stack.Screen
                    name="AsyncLogin"
                    component={AsyncLogin}
                    options={{
                       headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ReactNavigation;