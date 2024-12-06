import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import CustomInput, { CustomInputRef } from './CustomInput'

const RefDemo = () => {
    const inputRef = useRef<CustomInputRef>(null)
    return (
        <View style={styles.root}>
            <Button title='聚焦' onPress={() => {
                //让输入框聚焦
                inputRef.current?.customFocus()
            }} />
            <Button title='失焦' onPress={() => {
                //让输入框失焦
                inputRef.current?.customBlur()

            }} />
            <CustomInput ref={inputRef} />
        </View>
    )
}

export default RefDemo

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 64
    }
})