import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import WeatherComponent from '../../components/weather';

import Style from './style';

/**
 * Página responsável por renderizar a previsão do tempo da localidade selecionada.
 * 
 * @param {Object} props Comunicação direta com o componente filho.
 * @exemple const { params: currentWeather } = props.route;
 * { currentLocation: 'Rio de Janeiro', currentTemperature: 34, maxTemperature: 38, minTemperature: 21, airHumidity: 17, windSpeed: 11 }
 */
export default DetailScreen = (props) => {
    const { params: currentWeather } = props.route;

    return (
        <SafeAreaView style={Style.content}>
            <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator="false">
                <WeatherComponent key={currentWeather.id} response={currentWeather} />
            </ScrollView>
        </SafeAreaView>
    );
}