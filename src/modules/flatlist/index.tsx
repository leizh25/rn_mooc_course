import {
  Button,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const data = Array.from({length: 20}, (_, i) => i).map(i => ({
  id: i,
  name: 'name' + i,
}));
const FlatListDemo = () => {
  const [refreshing, setRefreshing] = useState(false);
  const renderItem = ({item}: {item: (typeof data)[0]; index: number}) => (
    <Text style={styles.txt}>{`List item ${item.id}-${item.name}`}</Text>
  );
  return (
    <FlatList
      style={styles.flatlist}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.containerStyle}
      showsVerticalScrollIndicator={false}
      onScroll={e => {
        console.log(e.nativeEvent.contentOffset.y);
      }}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      ListHeaderComponent={<Button title="我是表头" />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            console.log('refreshing');
            setRefreshing(true);
            setTimeout(() => setRefreshing(false), 3000);
          }}
        />
      }
    />
  );
};

export default FlatListDemo;

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
  txt: {
    width: '100%',
    height: 56,
    fontSize: 24,
    color: '#000',
    textAlignVertical: 'center',
  },
  containerStyle: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
