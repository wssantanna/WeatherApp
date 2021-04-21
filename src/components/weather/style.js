import { Dimensions, StyleSheet } from 'react-native';

export default Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexGrow: 1,
        flexShrink: 1,
        paddingHorizontal: 35,
        paddingVertical: 50,
        width: Dimensions.get('window').width
    },
    localizationContainer: {
        flexGrow: 1
    },
    temperatureContainer: {
        alignItems: 'center',
        flexGrow: 9,
        justifyContent: 'center'
    },
    minMaxTemperatureContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    windSpeedAndHumidityContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-around'
    }
});