import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import CustomInput from './CustomInput'

const RefDemo = () => {
    const inputRef = useRef<TextInput>(null)
    return (
        <View style={styles.root}>
            <Button title='点我' onPress={() => {
                //让输入框聚焦
                inputRef.current?.focus()
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