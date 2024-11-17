import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScrollViewDemo = () => {
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.containerStyle}>
      <Text>ScrollViewDemo</Text>
      {Array.from({length: 9}, (_, i) => i).map(i => (
        <Text key={i} style={styles.txt}>
          {i}
        </Text>
      ))}
    </ScrollView>
  );
};

export default ScrollViewDemo;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  txt: {
    width: '100%',
    height: 50,
    fontSize: 30,
    color: 'red',
  },
  containerStyle: {
    paddingHorizontal: 10,
    backgroundColor: '#e0e0e0',
    paddingTop: 20,
  },
});
