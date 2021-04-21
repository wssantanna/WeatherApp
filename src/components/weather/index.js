import React from 'react';

import { SafeAreaView, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import IconIonicons from 'react-native-vector-icons/Ionicons';

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
        name: currentLocation,
        main: {
            temp: currentTemperature,
            temp_max: maxTemperature,
            temp_min: minTemperature,
            humidity:
            airHumidity
        },
        wind: {
            speed: windSpeed
        },
        weather: { description:
            weatherDescription
        }
    } = props.response;

    function convertFahrenheitToCelsius(value) {
        const fahrenheit = 273.15;
        const celsius = parseInt(value - fahrenheit);

        return celsius;
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.localizationContainer}>
                <Text h4><Icon name='location-on' size={20} /> {currentLocation}</Text>
            </View>
            <View style={Styles.temperatureContainer}>
                <Text style={{ fontSize: 90 }}>{convertFahrenheitToCelsius(currentTemperature)}°C</Text>
                <Text h4 style={{ textAlign: 'center' }}>{weatherDescription}</Text>
            </View>
            <View style={Styles.minMaxTemperatureContainer}>
                <Text h2><Icon name='long-arrow-up' type="font-awesome" size={20} /> {convertFahrenheitToCelsius(maxTemperature)} °C</Text>
                <Text h2><Icon name='long-arrow-down' type="font-awesome" size={20} /> {convertFahrenheitToCelsius(minTemperature)} °C</Text>
            </View>
            <View style={Styles.windSpeedAndHumidityContainer}>
                <Text h4><IconIonicons name='water-outline' size={20} /> {airHumidity}%</Text>
                <Text h4>{windSpeed}km/h</Text>
            </View>
        </SafeAreaView>
    );
}