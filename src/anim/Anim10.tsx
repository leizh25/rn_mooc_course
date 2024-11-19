import { Animated, Button, Image, LayoutAnimation, StyleSheet, Text, UIManager, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const Anim10 = () => {
  const [showView, setshowView] = useState(false)
  const [showRight, setShowRight] = useState(false)

  return (
    <View style={styles.root}>
      <Button
        onPress={() => {
          // LayoutAnimation.configureNext(
          //   // LayoutAnimation.Presets.linear
          //   // LayoutAnimation.Presets.spring
          //   LayoutAnimation.Presets.easeInEaseOut,
          //   () => {
          //     console.log("动画结束");

          //   },
          //   () => {
          //     console.log("动画异常");

          //   }
          // )
          // setshowView(true)

          // ==========

          // LayoutAnimation.configureNext(
          //   LayoutAnimation.Presets.linear
          // )
          LayoutAnimation.linear()
          setShowRight(true)
        }}
        title={'点我'}
      />
      {/* {showView && <View style={[styles.view,]}></View>} */}
      <View style={[styles.view2, {
        flexDirection: showRight ? "row-reverse" : "row"
      }]}>
        <Image source={require("../assets/images/avatar.png")} style={styles.img} />
        <Text style={styles.txt}>这是一行自我介绍的文本!</Text>
      </View>
    </View>
  );
};

export default Anim10;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginTop: 20,
  },
  view2: {
    width: "100%",
    height: 100,
    backgroundColor: '#f0f0f0',
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
  txt: {
    fontSize: 20,
    color: "#303030",
    fontWeight: "bold",
    marginHorizontal: 20
  }
});
