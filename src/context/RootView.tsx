import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PageView from './PageView'
import ThemeContext from './ThemeContext'
const RootView = () => {
    const [theme, setTheme] = useState<"dark" | "light">("dark")
    return (
        <ThemeContext.Provider value={theme}>
            <Button title='切换主题' onPress={() => setTheme(state => {
                if (state == "dark") return "light"
                else return "dark"
            })} />
            <View style={{ width: "100%" }}>
                <PageView />
            </View>
        </ThemeContext.Provider>
    )
}

export default RootView

const styles = StyleSheet.create({})