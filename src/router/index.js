import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../views/home';
import LocationScreen from '../views/locations';

const Drawer = createDrawerNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Locations" component={LocationScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}