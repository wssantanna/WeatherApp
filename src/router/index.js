import React from 'react';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome'

import HomeScreen from '../views/home';
import LocationScreen from '../views/locations';
import DetailScreen from '../views/detail';

const Stack = createStackNavigator();

export default function Router() {

    return (
        <React.Fragment>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{

                    }}
                >
                    <Stack.Screen
                        key={1}
                        name="Home"
                        component={HomeScreen}
                        options={({ navigation }) => {
                            return {
                                headerTitle: '',
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate('Lista de locais')}
                                        type="clear"
                                        icon={< IconFontAwesome name="th" size={25} color="#000" />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        key={2}
                        name="Lista de locais"
                        component={LocationScreen}
                        options={() => {
                            return {
                                headerTitle: ''
                            }
                        }}
                    />
                    <Stack.Screen
                        key={3}
                        name="Detalhes"
                        component={DetailScreen}
                        options={() => {
                            return {
                                headerTitle: ''
                            }
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </React.Fragment>
    );
}