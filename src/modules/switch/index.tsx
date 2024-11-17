import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';

const SwitchPage = () => {
  const [switchValue, SetswitchValue] = useState(false);
  return (
    <View>
      <Text>SwitchPage</Text>
      <Switch
        value={switchValue}
        onValueChange={value => SetswitchValue(value)}
        disabled={false}
        trackColor={{false: '#808080', true: '#f00'}}
        thumbColor={switchValue ? '#2030ff' : '#303030'}
      />
    </View>
  );
};

export default SwitchPage;
