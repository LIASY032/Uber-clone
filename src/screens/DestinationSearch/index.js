import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles.js';

export default function DestinationSearch() {
  const [originPlace, setOriginPlace] = React.useState(null);
  const [destinationPlace, setDestinationPlace] = React.useState(null);
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="From" />
      <TextInput style={styles.textInput} placeholder="Where to?" />

      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, detail = null) => {
          console.log(data, detail);
        }}
        query={{key: 'AIzaSyD0kb2Jbd7T__TgfHpFY12TABgTxjtSZ8k', language: 'en'}}
      />
    </View>
  );
}
