import React from 'react';
import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
// import HomeSearch from '../../components/HomeSearch';

export default function HomeScreen(props) {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      {/* <HomeSearch /> */}
    </View>
  );
}
