import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ButtonDemo = () => {
  return (
    <View style={styles.container}>
      <Text>ButtonDemo</Text>
      <Button title="按钮" color={'#f00'}/>
    </View>
  );
};

export default ButtonDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
