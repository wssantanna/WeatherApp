import React, { createContext } from 'react';
import Mock from '../services/Mock';

const WeatherContext = createContext({});

export const WeatherProvide = (props) => {
    const provider = {
        state: {
            Mock
        }
    };

    return (
        <WeatherContext.Provider value={provider}>
            {props.children}
        </WeatherContext.Provider>
    )
};

export default WeatherContext;