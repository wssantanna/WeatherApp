import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'

import Mock from '../../services/Mock';

import Style from './style';

export default LocationScreen = (props) => {
    return (
        <ScrollView>
            <SafeAreaView style={Style.content}>
                {
                    Mock.map((location, index) => (
                        <ListItem
                            onPress={() => { props.navigation.navigate('Detalhes', location) }}
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