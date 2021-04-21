import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'

import Mock from '../../services/Mock';

import Style from './style';

/**
 * Página responsável por renderizar a previsão do tempo de acordo com localização.
 * 
 * @param {Object} props Comunicação direta com o componente filho.
 * @exemple const { params: currentWeather } = props.route;
 * { currentLocation: 'Rio de Janeiro', currentTemperature: 34, maxTemperature: 38, minTemperature: 21, airHumidity: 17, windSpeed: 11 }
 */
export default LocationScreen = (props) => {

    const { navigation: { navigate }, route: { params: locations } } = props;

    return (
        <ScrollView>
            <SafeAreaView style={Style.content}>
                {
                    Mock.map((location, index) => (
                        <ListItem
                            onPress={() => { navigate('Detalhes', location) }}
                            key={index}
                            Component={TouchableScale}
                            friction={90}
                            tension={100}
                            activeScale={0.95}>
                            <ListItem.Content style={{ paddingVertical: 15 }}>
                                <ListItem.Title>{location.currentLocation}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron color="black" />
                        </ListItem>
                    ))
                }
            </SafeAreaView>
        </ScrollView >
    );
}