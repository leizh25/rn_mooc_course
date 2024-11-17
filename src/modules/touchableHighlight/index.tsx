import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const TouchableHighlightDemo = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.btn}
        activeOpacity={0.7}
        onPress={() => null}
        underlayColor={'#bfa'}>
        <Text style={styles.txt}>按钮</Text>
      </TouchableHighlight>
    </View>
  );
};

export default TouchableHighlightDemo;

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
