import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const TouchableOpacityDemo = () => {
  return (
    <View style={styles.container}>
      <Text>TouchableOpacityDemo</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
        <Text>按钮</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableOpacityDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  btn: {
    width: 300,
    height: 65,
    backgroundColor: '#f00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
