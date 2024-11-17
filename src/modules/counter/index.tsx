import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(i => i + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <StatusBar backgroundColor={'#2E2E2E'} barStyle={'light-content'} />
      <View style={styles.contsiner}>
        <Text style={styles.desc}>RN计数器</Text>
        <Text style={styles.count}>{count}</Text>
      </View>
    </>
  );
};

export default Counter;

const styles = StyleSheet.create({
  contsiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    backgroundColor: '#2E2E2E',
  },
  desc: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  count: {
    color: '#216CF6',
    fontSize: 60,
    fontWeight: 'bold',
  },
});
