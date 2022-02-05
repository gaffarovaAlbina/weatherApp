import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1CB5E0'],
        title: 'Идет дождь',
        subtitle: 'Не забудьте взять с собой зонт.'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'Идет снег',
        subtitle: 'Одевайтесь теплее и лепите снеговиков.'
    },
    Thunderstorm: { // гроза
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        title: 'На улице гроза!',
        subtitle: 'Будьте аккуратны, оставайтесь дома.'
    },
    Drizzle: { // изморось
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#1CB5E0'],
        title: 'На улице изморось',
        subtitle: 'Дождь может усилится.'
    },
    Mist: { // туман, мгла, пелена
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'Туман',
        subtitle: 'Будьте аккуратны.'
    },
    Smoke: { // смог
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Смог',
        subtitle: 'Советуем остаться дома.'
    },
    Haze: { // легкий туман
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'Легкий туман',
        subtitle: 'Будьте аккуратны.'
    },
    Dust: { // пыль
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
        title: 'Пыльно',
        subtitle: 'Лучше закрыть все кона дома.'
    },
    Fog: { // туман
        iconName: 'weather-fog',
        gradient: ['#E2E2E2', '#C9D6FF'],
        title: 'Туманно',
        subtitle: 'На улице плохая видимость. Будьте аккуратны.'
    },
    Sand: {
        iconName: 'weather-windy',
        gradient: ['#feb47v', '#ff7e5f'],
        title: 'На улице песок',
        subtitle: 'Будьте аккуратны, оставайтесь дома.'
    }, 
    Ash: { // пепел
        iconName: 'weather-windy',
        gradient: ['#bdc3c7', '#2c3e50'],
        title: 'Пепел',
        subtitle: 'Будьте аккуратны, оставайтесь дома.'
    },
    Squall: { // порыв
        iconName: 'weather-windy',
        gradient: ['#00d2ff', '#928dab'],
        title: 'Сильный порыв ветра',
        subtitle: 'Будьте аккуратны, оставайтесь дома.'
    },
    Tornado: {
        iconName: 'weather-tornado',
        gradient: ['#4b79a1', '#283e51'],
        title: 'Торнадо',
        subtitle: 'Высокий уровень опасности.'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Ясно',
        subtitle: 'На улице прекрасная погода, выходите гулять.'
    },
    Clouds: {
        iconName: 'cloud',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Облачно',
        subtitle: 'Возможны осадки.'
    }
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: "white",
        textAlign: 'center'
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: 'left'
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
        textAlign: 'left'
    },
    textContainer: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})