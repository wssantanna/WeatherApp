import React, { createContext, useEffect, useState } from 'react';
import WeatherService from '../services/WeatherService';

/**
 * Contexto responsável por prover os dados da API OpenWeatherMap
 * 
 * @param {Object} props.children Componente filho que deverá receber os dados compartilhados no contexto.
 * 
 */
const WeatherContext = createContext({});

export const WeatherProvide = (props) => {

    const [currentWeater, setCurrentWeather] = useState('null');

    useEffect(() => {
        getCurrentWeather();
    }, []);

    async function getCurrentWeather() {
        const weather = await WeatherService();
        setCurrentWeather(weather);
    }

    const provider = {
        state: {
            currentWeater
        }
    };

    return (
        <WeatherContext.Provider value={provider}>
            {props.children}
        </WeatherContext.Provider>
    )
};

export default WeatherContext;