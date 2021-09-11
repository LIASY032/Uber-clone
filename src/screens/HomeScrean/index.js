import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
// import HomeSearch from '../../components/HomeSearch';

export default function HomeScreen(props) {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
      <CovidMessage />
      {/* <HomeSearch /> */}
    </View>
  );
}
