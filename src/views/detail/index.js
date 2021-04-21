import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import WeatherComponent from '../../components/weather';

import Style from './style';

export default DetailScreen = (props) => {

    return (
        <SafeAreaView style={Style.content}>
            <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator="false">
                <WeatherComponent key={props.route.params.id} response={props.route.params} />
            </ScrollView>
        </SafeAreaView>
    );
}