import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'

type Props = {
    info: UserInfo
}
const InfoView = (props: Props) => {

    const { info } = props
    const theme = useContext(ThemeContext)
    const styles = theme === "dark" ? darkStyles : lightStyles
    console.log("render");

    return (
        <View style={styles.root}>
            <Image source={{ uri: info.avatar }} style={styles.avatar} />
            <Text style={styles.text}>{info.name}</Text>
            <View style={styles.infoLayout}>
                <Text style={styles.info}>{info.desc}</Text>
            </View>
        </View>
    )
}

export default React.memo(InfoView, (preProps, nextProps) => {
    //返回true  表示使用缓存  false表示不使用缓存   和shouldComponentUpdate相反
    return JSON.stringify(preProps.info) === JSON.stringify(nextProps.info)
})

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