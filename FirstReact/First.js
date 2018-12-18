import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class First extends Component {
  render() {
    return (
      
      <View>
        <Text>This is the First screen after Home</Text>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
      </View>
    )
  }
};

export default First;