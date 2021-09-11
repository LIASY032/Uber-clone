import React, {Component} from 'react';
import {Dimensions, Text, View} from 'react-native';
import HomeMap from '../../components/HomeMap';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

export class SearchResult extends Component {
  render() {
    return (
      <View style={{display: 'flex', justifyContent: 'space-between'}}>
        <View style={{height: Dimensions.get('window').height - 400}}>
          <RouteMap />
        </View>
        <View style={{height: 400}}>
          <UberTypes />
        </View>
      </View>
    );
  }
}

export default SearchResult;
