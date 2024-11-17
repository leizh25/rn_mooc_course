import {
  Alert,
  BackHandler,
  Button,
  Dimensions,
  Keyboard,
  Linking,
  PermissionsAndroid,
  PixelRatio,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  useWindowDimensions,
  Vibration,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useBackHandler} from '@react-native-community/hooks';

const Testapi = () => {
  //   const {width, height} = useWindowDimensions();
  //   console.log('width: ', width);
  //   console.log('height: ', height);

  //   useBackHandler(() => {
  //     return true;
  //   });

  useEffect(() => {
    // 监听屏幕变化, APP小窗模式,导航栏隐藏,状态栏隐藏,都会触发
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        console.log('window: ', window);
        console.log('screen: ', screen);
      },
    );
    // BackHandler.addEventListener('hardwareBackPress', backForAndroid);

    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardHide,
    );
    return () => {
      subscription.remove();
      //   BackHandler.removeEventListener('hardwareBackPress', backForAndroid);
      showSubscription.remove();
      hideSubscription.remove();
    };
  });
  //   const backForAndroid = () => {
  //     return false;
  //   };
  const onKeyboardShow = () => {
    console.log('键盘出现');
  };
  const onKeyboardHide = () => {
    console.log('键盘消失');
  };
  const onPress = async () => {
    // ==============================console=============================
    //   const buttons = [
    //     {text: '取消', onPress: () => console.log('取消')},
    //     {text: '确定', onPress: () => console.log('确定')},
    //   ];
    //   Alert.alert('这是标题', '这是内容', buttons);
    //   console.log('这是普通的日志输出');
    //   console.info('信息日志输出');
    //   console.debug('调试日志输出');
    //   console.warn('警告日志输出');
    //   console.error('错误日志输出');
    //   const name = '张三';
    //   console.log('我的名字叫%s', name);
    //   console.log('我的编号是%d', 12);
    //   const obj = {name: '张三', age: 12};
    //   console.log('我是一个对象%o', obj);
    //   console.log(
    //     '%c这行日志红色文字,字号大',
    //     'color:red; font-size:x-large',
    //   );
    //   const viewLayout = (
    //     <View>
    //       <Text style={{color: 'red', width: 100, height: 100}}>
    //         这是一个View
    //       </Text>
    //     </View>
    //   );
    //   console.log(viewLayout);
    //   const users = [
    //     {name: '张三', age: 12},
    //     {name: '李四', age: 13},
    //   ];
    //   console.table(users);
    //   console.group();
    //   console.log('第一行日志');
    //   console.log('第二行日志');
    //   console.group();
    //   console.log('第一组,第一行日志');
    //   console.log('第一组,第二行日志');
    //   console.log('第一组,第三行日志');
    //   console.groupEnd();
    //   console.log('第三行日志');
    //   console.groupEnd();
    // ===============================Dimensions==================================
    // const {width, height, scale, fontScale} = Dimensions.get('screen');
    // console.log('width: ', width);
    // console.log('height: ', height);
    // console.log('scale: ', scale); //缩放比,一个逻辑像素对应多少物理像素
    // console.log('fontScale: ', fontScale); //字体缩放比,系统设置的文字大小
    // ==============================platform=============================
    // console.log('platform.OS', Platform.OS);
    // console.log('platform.Version', Platform.Version);
    // console.log('platform.constants', Platform.constants);
    // console.log('Platform.isTV', Platform.isTV);
    // console.log('Platform.isTesting', Platform.isTesting);
    // const style = Platform.select({
    //   android: {
    //     margintTop: 20,
    //   },
    //   ios: {
    //     margintTop: 0,
    //   },
    //   default: {
    //     margintTop: 10,
    //   },
    // });
    // console.log('style', style);
    // ==================================StyleSheet======================================
    // const s1 = {
    //   fontSize: 18,
    // };
    // const s2 = {
    //   fontSize: 20,
    //   color: 'red',
    // };
    // const composeStyle = StyleSheet.compose(s1, s2); //比直接写[s1,s2]性能更好
    // console.log('composeStyle: ', composeStyle);
    // const flattenStyle = StyleSheet.flatten([s1, s2]); //平铺, 如果重复,后面覆盖前面的
    // console.log('flattenStyle: ', flattenStyle);
    // console.log(StyleSheet.absoluteFill); //绝对定位,铺满包含块
    // console.log(StyleSheet.hairlineWidth); //头发丝,一个物理像素大小
    // console.log(1 / Dimensions.get('window').scale);
    // =====================================Linking===============================================
    // if (await Linking.canOpenURL('https://www.baidu.com')) {
    //   Linking.openURL('https://www.baidu.com');
    // }
    // Linking.openURL('geo:12.3456789,12.3456789');
    // Linking.openURL('tel:10086');
    // Linking.openURL('smsto:10010');
    // Linking.openURL('mailto:10010@qq.com');
    // Linking.openSettings(); //打开此APP在设置中的页面
    // =======================================PixelRatio===================================================
    // console.log(PixelRatio.get()); //屏幕像素密度
    // console.log(Dimensions.get('screen').scale); //屏幕像素密度
    // console.log(PixelRatio.getFontScale()); //字体缩放密度, 仅安卓
    // console.log(PixelRatio.getPixelSizeForLayoutSize(200)); //获取200CSS像素对应的物理像素
    // console.log();
    // =======================================BackHandler===========
    // BackHandler.exitApp();
    // =======================================PermissionAndroid======================================
    // console.log(PermissionsAndroid.PERMISSIONS);
    //申请单个权限
    // const needPermission =
    //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    // PermissionsAndroid.check(needPermission).then(result => {
    //   console.log('result: ', result);
    //   if (!result) {
    //     PermissionsAndroid.request(needPermission).then(status => {
    //       console.log('status: ', status);
    //       if (status === 'granted') {
    //         // 获得权限
    //       } else if (status === 'denied') {
    //         // 拒绝权限
    //       }
    //     });
    //   }
    // });
    // 申请多个权限
    // PermissionsAndroid.requestMultiple([
    //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //   PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    // ]).then(status => {
    //   console.log('status: ', status);
    // });
    // =========================================VIBRATE=======================================
    // Vibration.vibrate();
    // Vibration.vibrate(1000); //震动1000毫秒,仅安卓支持指定时间
    // Vibration.vibrate(50);
    // 安卓时间模式   停100毫秒，震动500毫秒,停200毫秒，震动500毫秒
    // Vibration.vibrate([100, 500, 200, 500]);
    // Vibration.cancel();
    // IOS 时间模式  停100毫秒，震动100毫秒，停200毫秒，震动200毫秒,停300毫秒，震动300毫秒，停400毫秒，震动400毫秒
    // Vibration.vibrate([100, 200, 300, 400]);
    //循环模式
    // Vibration.vibrate([100, 200, 300, 400], true);
    // ======================================ToastAndroid===========================================
    // ToastAndroid.show('hello world', ToastAndroid.SHORT);
    // ToastAndroid.show('hello world', ToastAndroid.LONG);
    // 指定演出位置   无效   安卓即将弱化toast,使用snackbar
    // ToastAndroid.showWithGravity(
    //   'hello world',
    //   ToastAndroid.SHORT,
    //   ToastAndroid.TOP,
    // );
    // =======================================Keyboard============================
    Keyboard.dismiss();
  };
  return (
    <View style={styles.root}>
      <Button title="点我测试" onPress={onPress} />
      {/* <View style={styles.view}>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
      </View> */}

      <View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'red',
            marginTop: 10,
          },
          {
            transform: [
              // {translateX: 100},
              // {translateY: 100},
              //  {scale: 1.5}
              // {scaleX: 1.5},
              {
                rotateX: '45deg',
              },
            ],
          },
        ]}></View>
      <TextInput style={{width: '100%', backgroundColor: '#bfa'}} />
    </View>
  );
};

export default Testapi;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingTop: Platform.select({
      android: 20,
      ios: 0,
      default: 10,
    }),
    ...Platform.select({
      android: {
        margintTop: 20,
      },
      ios: {
        margintTop: 0,
      },
      default: {
        margintTop: 10,
      },
    }),
  },
  view: {
    width: '100%',
    backgroundColor: '#f00',
  },
  subView: {
    width: '100%',
    height: PixelRatio.roundToNearestPixel(32.1), //获取就近值
    backgroundColor: '#bfa',
  },
});
