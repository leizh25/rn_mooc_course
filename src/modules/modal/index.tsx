import {StyleSheet, Text, View, Modal, Button, SectionList} from 'react-native';
import React, {useState} from 'react';
import {SectionData} from '../../constants/Data';

const ModalDemo = () => {
  const showModal = () => {
    setVisivle(!visivle);
  };
  const [visivle, setVisivle] = useState(false);
  const renderItem = ({item, index, section}) => {
    return <Text style={styles.txt}>{item}</Text>;
  };
  const ListHeader = (
    <View>
      <Text>列表头部</Text>
      <Button title="点我隐藏Modal" onPress={() => setVisivle(false)} />
    </View>
  );
  const ListFooter = (
    <View>
      <Text>列表底部</Text>
    </View>
  );
  const renderSectionHeader = ({section}) => {
    return <Text>{section.type}</Text>;
  };
  return (
    <View style={styles.root}>
      <Button title="点我显示/隐藏Modal" onPress={showModal} />
      <Modal
        visible={visivle}
        onRequestClose={() => setVisivle(false)}
        transparent={true}
        statusBarTranslucent={true}
        animationType="slide"
        onShow={() => console.log('onShow')}
        onDismiss={() => console.log('onDismiss')}>
        <View style={styles.blank}>
          <View style={styles.content}>
            <SectionList
              style={styles.sectionList}
              sections={SectionData}
              renderItem={renderItem}
              keyExtractor={(item, index) => `${item}-${index}`}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={ListHeader}
              ListFooterComponent={ListFooter}
              renderSectionHeader={renderSectionHeader}
              ItemSeparatorComponent={() => (
                <View style={styles.separator}></View>
              )}
              stickySectionHeadersEnabled={true}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalDemo;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 10,
  },
  blank: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000050',
  },
  content: {
    width: '100%',
    // height: '10%',
    backgroundColor: '#bfa',
  },
  sectionList: {
    width: '100%',
    height: '100%',
  },
  txt: {
    width: '100%',
    height: 56,
    fontSize: 20,
    color: '#333',
    textAlignVertical: 'center',
    paddingLeft: 16,
    fontWeight: 'bold',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
  },
});
