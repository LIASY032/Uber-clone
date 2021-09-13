/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';
import type {Node} from 'react';
import {
  StatusBar,
  useColorScheme,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import HomeScreen from './src/screens/HomeScreen';
// import DestinationSearch from './src/screens/DestinationSearch';
// import SearchResult from './src/screens/SearchResult';
import Geolocation from '@react-native-community/geolocation';
// import HomeNavigator from './src/navigation/Home';
import RootNavigator from './src/navigation/Root';

import Amplify from 'aws-amplify';

import {withAuthenticator} from 'aws-amplify-react-native';
import awsmobile from './src/aws-exports';
Amplify.configure(awsmobile);

navigator.geolocation = require('@react-native-community/geolocation');
const App: () => Node = () => {
  async function androidPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      Geolocation.requestAuthorization();
    }
  }, []);
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <HomeScreen /> */}
      {/* <SearchResult /> */}
      {/* <DestinationSearch /> */}
      {/* <HomeNavigator /> */}
      <RootNavigator />
    </>
  );
};

export default App;
