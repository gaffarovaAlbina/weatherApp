import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import React from 'react';
import { render } from 'react-dom';
import Weather from './Weather';
import axios, { Axios } from 'axios';

const API_KEY = '6c5c72efd9d86db0fb81445041e7d41a';

export default class extends React.Component {

state = {
  isLoading: true
}

getWeather = async (latitude, longitude) => {
  const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
  this.setState({
    isLoading: false,
    temp: temp,
    condition: weather[0].main,
  });
  console.log(data);
}

getLocation = async () => {
  try {
    await Location.requestPermissionsAsync();
    const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
    this.getWeather(latitude, longitude);
  } catch (error) {
    Alert.alert('Не могу определить местоположение', "Очень грустно :(");
  }
}

componentDidMount() {
  this.getLocation();
}

  render() {
    const {isLoading, temp, condition} = this.state;
    return(
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>
    )
  }
}