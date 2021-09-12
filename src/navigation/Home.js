import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearch from '../screens/DestinationSearch';

// import OrderScreen from '../screens/OrderScreen';
import SearchResult from '../screens/SearchResult';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'DestinationSearch'} component={DestinationSearch} />
      <Stack.Screen name={'SearchResult'} component={SearchResult} />
      {/* <Stack.Screen name={'OrderPage'} component={OrderScreen} /> */}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
