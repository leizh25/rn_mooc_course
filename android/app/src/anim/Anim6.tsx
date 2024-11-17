import {Animated, Button, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

const Anim6 = () => {
  const marginLeft = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.root}>
      <Button
        onPress={() => {
          Animated.timing(marginLeft, {
            toValue: 200,
            duration: 500,
            useNativeDriver: false, //默认为false,是否使用原生驱动
            //
            // easing: Easing.back(3),
            // easing: Easing.ease,
            // easing: Easing.bounce,
            // easing: Easing.elastic(2),
            // 三个标准函数
            // easing: Easing.linear,
            // easing: Easing.quad,
            // easing: Easing.cubic,
            // 四中补充函数
            // easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            // easing: Easing.circle,
            // easing: Easing.sin,
            // easing: Easing.exp,
            // 自由组合函数   所有组合函数效果 https://easings.net
            // easing: Easing.in(Easing.bounce),
            // easing: Easing.out(Easing.exp),
            easing: Easing.inOut(Easing.elastic(3)),
          }).start();
        }}
        title={'点我'}
      />
      <Animated.View
        style={[
          styles.view,
          {
            marginLeft,
          },
        ]}></Animated.View>
    </View>
  );
};

export default Anim6;

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
