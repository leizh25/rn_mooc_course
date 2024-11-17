import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const PersonalInfo = () => {
  console.log('height: ', Dimensions.get('window').height);

  return (
    <View style={styles.root}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground
        style={styles.infoCardContainer}
        source={require('../../assets/images/icon_bg.png')}
        onLayout={e => {
          console.log(e.nativeEvent);
        }}>
        {/* 菜单和分享 */}
        <View style={styles.operationBar}>
          <TouchableOpacity>
            <Image
              style={styles.operationBarBtn}
              source={require('../../assets/images/icon_menu.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.operationBarBtn}
              source={require('../../assets/images/icon_share.png')}
            />
          </TouchableOpacity>
        </View>
        {/* 头像和昵称 */}
        <View style={styles.avatarAndNickname}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require('../../assets/images/avatar.png')}
            />
            <TouchableOpacity>
              <Image
                style={styles.addBtn}
                source={require('../../assets/images/icon_add.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.nicknameContainer}>
            <Text style={styles.nickname}>大公爵</Text>
            <View style={styles.numContainer}>
              <Text style={styles.num}>
                小红书号: <Text>1183806775</Text>
              </Text>
              <TouchableOpacity>
                <Image
                  style={styles.code}
                  source={require('../../assets/images/icon_code.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* 简介 */}
        <View style={styles.introduction}>
          <Text style={styles.introductionText}>点击关注,填写简介</Text>
        </View>
        {/* 性别 */}
        <View style={styles.genderContainer}>
          <View style={styles.genderView}>
            <Image
              style={styles.gender}
              resizeMode="contain"
              source={require('../../assets/images/icon_male.png')}
            />
          </View>
        </View>
        {/* 粉丝数和编辑资料 */}
        <View style={styles.fansAndEditContainer}>
          <View style={styles.fansContainer}>
            <View style={styles.numBox}>
              <Text style={styles.fansNum}>142</Text>
              <Text style={styles.type}>关注</Text>
            </View>
            <View style={styles.numBox}>
              <Text style={styles.fansNum}>2098</Text>
              <Text style={styles.type}>粉丝</Text>
            </View>
            <View style={styles.numBox}>
              <Text style={styles.fansNum}>1042</Text>
              <Text style={styles.type}>获赞与收藏</Text>
            </View>
          </View>
          <View style={styles.editContainer}>
            <View style={styles.editBtn}>
              <Text style={styles.editText}>编辑资料</Text>
            </View>
            <View style={styles.settingBtn}>
              <Image
                style={styles.settingIcon}
                resizeMode="contain"
                source={require('../../assets/images/icon_setting.png')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View
        style={styles.actionFooter}
        onLayout={e => console.log(e.nativeEvent)}>
        
      </View>
    </View>
  );
};

export default PersonalInfo;

const padding = 20;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  infoCardContainer: {
    width: '100%',
    height: 350,
    paddingTop: StatusBar.currentHeight || 0,
  },
  operationBar: {
    height: 40,
    // backgroundColor: '#bfa',
    paddingHorizontal: padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  operationBarBtn: {
    width: 30,
    height: 30,
  },
  avatarAndNickname: {
    width: '100%',
    height: 100,
    marginVertical: 20,
    paddingHorizontal: padding,
    flexDirection: 'row',
    gap: 10,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addBtn: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  nicknameContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 5,
  },
  nickname: {
    fontSize: 20,
    color: '#fff',
  },
  numContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  num: {
    width: 150,
    fontSize: 14,
    color: '#fff',
  },
  code: {
    width: 16,
    height: 16,
    // marginLeft: 10,
  },
  introduction: {
    width: '100%',
    height: 30,
    // backgroundColor: '#bfa',
  },
  introductionText: {
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: padding,
  },
  genderContainer: {
    height: 20,
    paddingHorizontal: padding,
  },
  genderView: {
    width: 30,
    height: 20,
    backgroundColor: '#ffffff70',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  gender: {
    width: 15,
    height: 15,
  },
  fansAndEditContainer: {
    height: 70,
    paddingHorizontal: padding,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fansContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  numBox: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fansNum: {
    fontSize: 20,
    color: '#fff',
  },
  type: {
    fontSize: 12,
    color: '#fff',
  },
  editContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  editBtn: {
    justifyContent: 'center',
  },
  editText: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
  },
  settingBtn: {
    justifyContent: 'center',
  },
  settingIcon: {
    width: 40,
    height: 25,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
  },
  actionFooter: {
    height:
      Dimensions.get('window').height -
      350 +
      (StatusBar.currentHeight || 0) +
      18,
    backgroundColor: '#f00',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    transform: [{translateY: -18}],
  },
});
