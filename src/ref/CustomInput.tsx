import { LayoutAnimation, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

export interface CustomInputRef {
    customFocus: () => void
    customBlur: () => void
}
const CustomInput = (_props, ref) => {
    const [value, setValue] = useState("")
    const inputRef = useRef<TextInput>(null)
    const customFocus = () => {
        console.log('customFocus: ',);
        inputRef.current?.focus()
    }
    const customBlur = () => {
        console.log('customBlur: ',);
        inputRef.current?.blur()
    }
    useImperativeHandle(ref, () => {
        return {
            customFocus,
            customBlur
        }
    })
    return (
        <View style={styles.root}>
            <View style={[styles.inputWrapper, [{ borderColor: value.length === 0 ? "#e0e0e0" : value.length === 11 ? "green" : "red" }]]}>
                <TextInput ref={inputRef} value={value} onChangeText={value => {
                    LayoutAnimation.spring();
                    setValue(value)
                }} maxLength={11}></TextInput>
                <Text style={[styles.inputTip, [{ color: value.length === 0 ? "" : value.length === 11 ? "green" : "red" }]]}>
                    {value.length === 0 ? "请输入" : value.length === 11 ? "输入正确✅" : "输入错误❎"}
                </Text>
            </View>
        </View>
    )
}

export default forwardRef(CustomInput)

const styles = StyleSheet.create({
    root: {

    },
    inputWrapper: {
        borderWidth: 2,
        borderColor: "#e0e0e0",
        borderRadius: 10,
        padding: 8,
        margin: 8
    },
    inputTip: {
        height: 20,
        position: "absolute",
        bottom: -30,
        left: 8,
        color: "#999"
    }
})