import React from 'react';

import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-elements';

import Styles from './style';

/**
 * View responsável por renderizar a previsão do tempo de acordo com localização.
 * 
 * @param {Object} props.response Valores de localidade, temperatura, temperatura máxima e mínima, umidade do ar e velocidade dos ventos.
 * @exemple
 * { currentLocation: 'Rio de Janeiro', currentTemperature: 34, maxTemperature: 38, minTemperature: 21, airHumidity: 17, windSpeed: 11 }
 */
export default WeatherComponent = (props) => {
    const {
        currentLocation,
        currentTemperature,
        maxTemperature,
        minTemperature,
        airHumidity,
        windSpeed,
        weatherDescription
    } = props.response;

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.localizationContainer}>
                <Text h4>{currentLocation}</Text>
            </View>
            <View style={Styles.temperatureContainer}>
                <Text style={{ fontSize: 90 }}>{currentTemperature}°C</Text>
                <Text h4 style={{ textAlign: 'center' }}>{weatherDescription}</Text>
            </View>
            <View style={Styles.minMaxTemperatureContainer}>
                <Text h3>{maxTemperature} °C</Text>
                <Text h3>{minTemperature} °C</Text>
            </View>
            <View style={Styles.windSpeedAndHumidityContainer}>
                <Text h4>{airHumidity}km/h</Text>
                <Text h4>{windSpeed}%</Text>
            </View>
        </SafeAreaView>
    );
}