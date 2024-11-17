import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

const Anim3 = () => {
  const marginLeft = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.root}>
      <Button
        onPress={() => {
          Animated.timing(marginLeft, {
            toValue: 200,
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
            position: 'absolute',
            top: marginLeft,
            left: marginLeft,
          },
        ]}></Animated.View>
    </View>
  );
};

export default Anim3;

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
