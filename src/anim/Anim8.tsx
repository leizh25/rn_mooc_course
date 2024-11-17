import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';

const Anim8 = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const marginLeft = useRef(new Animated.Value(0)).current;
  const marginTop = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.root}>
      <Button
        onPress={() => {
          //声明动画
          const moveX = Animated.timing(marginLeft, {
            toValue: 200,
            duration: 500,
            useNativeDriver: false
          })
          const moveY = Animated.timing(marginTop, {
            toValue: 300,
            duration: 500,
            useNativeDriver: false
          })
          const scaleAnim = Animated.timing(scale, {
            toValue: 1.5,
            duration: 500,
            useNativeDriver: false
          })
          // 执行动画
          // Animated.parallel([moveX, moveY, scaleAnim]).start()
          // Animated.sequence([moveX, moveY, scaleAnim]).start()
          // Animated.stagger(1500, [moveX, moveY, scaleAnim]).start()
          Animated.sequence([moveX,
            Animated.delay(500),
            moveY,
            Animated.delay(500),
            scaleAnim]).start()
        }}
        title={'点我'}
      />
      <Animated.View
        style={[
          styles.view,
          {
            transform: [
              { scale: scale },
              { translateX: marginLeft },
              { translateY: marginTop }
            ]
          },
        ]}></Animated.View>
    </View>
  );
};

export default Anim8;

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
