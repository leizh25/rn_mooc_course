import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InfoView from './InfoView'
import InfoView2 from './InfoView2'
const memoPage = () => {
    const [info, setInfo] = useState<UserInfo>({
        avatar: "",
        name: "",
        desc: ""
    })
    return (
        <View>
            <Button title='点我' onPress={() => {
                setInfo({
                    name: "尼古拉斯 赵四",
                    desc: "各位产品经理大家好,我是个人开发者张三,我学习RN两年半了,我喜欢安卓,RN,Flutter",
                    avatar: "https://reactnative.cn/img/header_logo.svg"
                })
            }} />
            {/* <InfoView info={info} /> */}
            <InfoView2 info={info} />
        </View>
    )
}

export default memoPage

const styles = StyleSheet.create({})