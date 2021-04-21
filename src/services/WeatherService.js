import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Local from '@react-native-community/geolocation';

import axios from 'axios';

export default WeatherService = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather',
    params: {
        appid: 'c0fff823b8dc79923f25fbd44550e507'
    }
});
