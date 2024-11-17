import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

const Anim2 = () => {
  // const marginLeft = useRef(new Animated.Value(0)).current;
  // const rotate = useRef(new Animated.Value(0)).current;
  // const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  // const rotateValue = rotate.interpolate({
  //   inputRange: [0, 45],
  //   outputRange: ['0deg', '45deg'],
  // });
  return (
    <View style={styles.root}>
      <Button
        onPress={() => {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false, //默认为false,是否使用原生驱动
          }).start();
        }}
        title={'点我'}
      />
      <Animated.View
        style={[
          styles.view,
          // {marginLeft}
          {
            transform: [
              // {rotate: rotateValue}
              // {scale},
            ],
          },
          {
            opacity,
          },
        ]}></Animated.View>
    </View>
  );
};

export default Anim2;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginTop: 60,
    marginLeft: 60,
  },
});
