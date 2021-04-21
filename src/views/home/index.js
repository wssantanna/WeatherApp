import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import Mock from '../../services/Mock';
import WeatherComponent from '../../components/weather';

import Style from './style';

export default HomeScreen = () => {

    return (
        <SafeAreaView style={Style.content}>
            <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator="false">
                {Mock.map((response) => <WeatherComponent key={response.id} response={response} />)}
            </ScrollView>
        </SafeAreaView>
    );
}