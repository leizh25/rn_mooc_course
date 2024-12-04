import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import icon_add from "../assets/images/icon_add.png"
type IReactComponent = React.ClassicComponentClass | React.ComponentClass | React.FunctionComponent | React.ForwardRefExoticComponent<any> | React.FC
const withFloatButton = <T extends IReactComponent>(OriginView: T): T => {
    const HOCView = (props: any) => {
        return (
            <>
                <OriginView {...props} />
                <TouchableOpacity style={styles.addBtn} onPress={() => {
                    console.log("onPress...")
                }}>
                    <Image source={icon_add} style={styles.addImg} />
                </TouchableOpacity>
            </>
        )
    }
    return HOCView as T
}

export default withFloatButton

const styles = StyleSheet.create({
    addBtn: {
        position: 'absolute',
        right: 40,
        bottom: 64,
    },
    addImg: {
        width: 54,
        height: 54,
        resizeMode: "contain"
    }
})