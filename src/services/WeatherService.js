import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Local from '@react-native-community/geolocation';

import axios from 'axios';

export default WeatherService = async () => {

    const [currentWeather, setCurrentWeather] = useState({});

    useEffect(() => {
        getCurrentCoordinates();
    }, []);

    function getCurrentCoordinates() {
        const geolocationOptions = {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 1000
        }
        Local.getCurrentPosition(
            (position) => getCurrentWeather(position.coords),
            (error) => Alert.alert(`Error: ${error.message}`),
            geolocationOptions
        );
    }

    async function getCurrentWeather(locationCoords) {
        const { latitude, longitude } = locationCoords;

        await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            method: 'get',
            url: '/',
            params: {
                lat: -43.2075,
                lon: -22.9028,
                appid: 'c0fff823b8dc79923f25fbd44550e507'
            }
        })
            .then((response) => {
                const { id, name, weather, main, wind, sys } = response.data;

                setCurrentWeather({
                    currentLocation: `${name}, ${sys.country}`,
                    currentTemperature: main.temp,
                    maxTemperature: main.temp_max,
                    minTemperature: main.temp_min,
                    airHumidity: main.humidity,
                    windSpeed: wind.speed,
                    weatherDescription: weather.description,
                    id
                })
            })
            .catch((error) => {
                Alert.alert(`Error: ${error.message}`);
            })

        return currentWeather;
    }

}