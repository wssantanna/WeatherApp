import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import WeatherService from '../../services/WeatherService';
import WeatherComponent from '../../components/weather';

import Style from './style';

export default HomeScreen = () => {

    const [currentWeather, setCurrentWeather] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        Promise.all([
            getCurrentWeather({ latitude: -22.9028, longitude: -43.2075 }),
            getCurrentWeatherByName('Lisbon'),
            getCurrentWeatherByName('Madrid'),
            getCurrentWeatherByName('Paris'),
            getCurrentWeatherByName('Berlim'),
            getCurrentWeatherByName('Copenhaga'),
            getCurrentWeatherByName('Roma'),
            getCurrentWeatherByName('Londres'),
            getCurrentWeatherByName('Dublin'),
            getCurrentWeatherByName('Praga'),
            getCurrentWeatherByName('Viena'),
        ])
    }, []);

    function getCurrentWeather(locationCoords) {
        const { latitude, longitude } = locationCoords;
        WeatherService.get(
            '/', {
            params: {
                lat: latitude,
                lon: longitude,
            }
        }).then(({ data }) => {
            currentWeather.push(data);
        }).catch((error) => {
            console.warn(`Error: ${error}`)
        });
    }

    function getCurrentWeatherByName(region) {
        WeatherService.get(
            '/', {
            params: {
                q: region,
            }
        }).then(({ data }) => {
            currentWeather.push(data);
            setLoader(true)
        }).catch((error) => {
            console.warn(`Error: ${error}`)
        });
    }

    return (
        <SafeAreaView style={Style.content}>
            <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator="false">
                {
                    loader ? currentWeather.map((response) => <WeatherComponent key={response.id} response={response} />) : false
                }
            </ScrollView>
        </SafeAreaView>
    );
}