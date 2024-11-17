import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';

const StatusBarPage = () => {
  return (
    <View>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#30303020'}
        animated={true}
        translucent={true}
        hidden={!true}
      />
      <Text>StatusBarPage</Text>
    </View>
  );
};

export default StatusBarPage;
