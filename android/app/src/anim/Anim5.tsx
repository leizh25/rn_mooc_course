import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

const Anim5 = () => {
  const marginLeft = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.root}>
      <Button
        onPress={() => {
          Animated.spring(marginLeft, {
            toValue: 200,
            useNativeDriver: false,
            // 第一组配置
            // bounciness: 15, //弹性, 默认为8,越大越弹
            // speed: 10, //默认12
            //  第二组
            // tension: 40, //张力, 默认40, 越大速度越快
            // friction: 20, //摩擦力, 默认7,越小越弹
            // 第三组
            stiffness: 400, //刚度, 默认100,越大越弹
            damping: 1, //阻尼, 默认10,越小越弹
            mass:100, //质量, 默认1,质量越大惯性越大, 惯性越大越弹
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

export default Anim5;

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
