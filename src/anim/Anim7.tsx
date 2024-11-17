import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';

const Anim7 = () => {
  const vector = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  return (
    <View style={styles.root}>
      <Button
        onPress={() => {
          Animated.timing(vector, {
            toValue: {
              x: 300,
              y: 400
            },
            duration: 500,
            useNativeDriver: false, //默认为false,是否使用原生驱动
          }).start();
        }}
        title={'点我'}
      />
      <Animated.View
        style={[
          styles.view,
          {
            marginLeft: vector.x,
            marginTop: vector.y
          },
        ]}></Animated.View>
    </View>
  );
};

export default Anim7;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginTop: 20,
  },
});
