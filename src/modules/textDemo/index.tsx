import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const TextDemo = () => {
  const textRef = useRef<Text>(null);
  useEffect(() => {
    setTimeout(() => {
      textRef.current?.setNativeProps({
        style: {color: '#ff0'},
      });
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Text
        style={styles.txt}
        numberOfLines={2}
        ellipsizeMode="tail"
        selectable
        selectionColor={'#f00'}
        allowFontScaling={true}
        onPress={() => console.log('onPress')}
        onLongPress={() => console.log('onLongPress')}>
        本次期末考试不及格人数
        <Text style={styles.innerTxt} ref={textRef}>
          8
        </Text>
        人
      </Text>
    </View>
  );
};

export default TextDemo;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#f0f0f0',
  },
  txt: {
    fontSize: 20,
    fontFamily: 'MissLemon',
    textDecorationLine: 'underline',
  },
  innerTxt: {
    color: '#f00',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
