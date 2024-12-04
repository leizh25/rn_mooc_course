import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import icon_add from "../assets/images/icon_add.png"
type IReactComponent = React.ClassicComponentClass | React.ComponentClass | React.FunctionComponent | React.ForwardRefExoticComponent<any> | React.FC
const withFloatButton = <T extends IReactComponent>(OriginView: T): T => {
    const HOCView = (props: any) => {
        useEffect(() => {
            console.log("高阶组件加载完成");
            reportDeviceInfo()
        }, [])
        const reportDeviceInfo = () => {
            //模拟上报
            const deviceInfo = {
                deviceId: "1",
                deviceName: "aaa",
                model: "vvv",
                storage: "128",
                ip: "1.1.1.1"
            }
            // 上报
        }
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