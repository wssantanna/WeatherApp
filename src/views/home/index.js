import React from 'react';
import { SafeAreaView } from 'react-native';

import WeatherComponent from '../../components/weather';

import Style from './style';

export default HomeScreen = () => {

    return (
        <SafeAreaView style={Style.content}>
            <WeatherComponent response={{
                currentLocation: 'Rio de Janeiro',
                currentTemperature: 36,
                maxTemperature: 40,
                minTemperature: 24,
                airHumidity: 13,
                windSpeed: 9,
                weatherDescription: 'Nublado'
            }} />
        </SafeAreaView>
    );
}