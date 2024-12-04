import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'

type Props = {
    info: UserInfo
}

export default class InfoView2 extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props)
    }
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<any>, nextContext: any): boolean {
        //和React.memo相反  返回true表示更新,返回false表示不更新
        return JSON.stringify(this.props.info) !== JSON.stringify(nextProps.info)
    }
    render(): React.ReactNode {
        const { info } = this.props
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
}


const styles = StyleSheet.create({
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