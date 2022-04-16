import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomFontsGlobalA from '../screens/CustomFontsGlobalA';
import CustomFontsGlobalB from '../screens/CustomFontsGlobalB'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

function CustomFontsMainC() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
            initialRouteName='CustomFontsGlobal_A'
            drawerPosition='left'
            drawerType='front'
            edgeWidth={100}
            hideStatusBar={false}
            overlayColor='#00000090'
            drawerStyle={{
                backgroundColor:'#e6e6e6',
                width:250
            }}
            screenOptions={{
                headerShown: true,
                swipeEnabled: true,
                gestureEnabled: true,
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

                <Drawer.Screen
                    name="CustomFontsGlobal_A"
                    component={CustomFontsGlobalA}
                    options={{
                        title:'CustomFontsGlobal_A Title',
                        drawerIcon: ({focused}) => (
                            <FontAwesome5
                            name='autoprefixer'
                            size={focused ? 25 : 20}
                            color={focused ? '#0080ff' : '#999999'}
                            />
                        )
                    }}
                />

                <Drawer.Screen
                    name="CustomFontsGlobal_B"
                    component={CustomFontsGlobalB}
                    options={{
                        title:'CustomFontsGlobal_B Title',
                        drawerIcon: ({focused}) => (
                            <FontAwesome5
                            name='btc'
                            size={focused ? 25 : 20}
                            color={focused ? '#0080ff' : '#999999'}
                            />
                        )
                    }}
                />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default CustomFontsMainC;