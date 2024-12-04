import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import withFloatButton from './withFloatButton'
const InfoView = () => {
    const theme = useContext(ThemeContext)
    console.log('theme: ', theme);
    const styles = theme === "dark" ? darkStyles : lightStyles
    return (
        <View style={styles.root}>
            <Image source={require("../assets/images/avatar.png")} style={styles.avatar} />
            <Text style={styles.text}>个人信息介绍</Text>
            <View style={styles.infoLayout}>
                <Text style={styles.info}>各位产品经理大家好,我是个人开发者张三,我学习RN两年半了,我喜欢安卓,RN,Flutter</Text>
            </View>
        </View>
    )
}

export default withFloatButton(InfoView)

const darkStyles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "#333",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center"
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#999",
        marginTop: 50
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20
    },
    infoLayout: {
        marginTop: 30,
        width: "80%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#ffffff50",
        borderRadius: 20
    },
    info: {
        color: "#fff",
        fontSize: 16
    }
})
const lightStyles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center"
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#eee",
        marginTop: 50
    },
    text: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20
    },
    infoLayout: {
        marginTop: 30,
        width: "80%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#00000050",
        borderRadius: 20
    },
    info: {
        color: "#000",
        fontSize: 16
    }
})