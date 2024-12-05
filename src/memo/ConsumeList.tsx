import { Button, FlatList, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { ListData, ListData2 } from '../constants/Data'
import { TypeColors } from '../constants/Data'
const ConsumeList = () => {

    const [data, setData] = useState(ListData)
    const [showLabel, setShowLabel] = useState(true)

    const calculateTotal = useMemo(() => {
        console.log("重新计算合计");

        return data.map(item => item.amount).reduce((pre, current) => pre + current)
    }, [data])
    const renderItem = ({ item, index }: { item: typeof data[0]; index: number }) => {
        const styles = StyleSheet.create({
            itemLayout: {
                width: "100%",
                padding: 16,
                flexDirection: "column",
                borderBottomWidth: 1,
                borderBlockColor: "#e0e0e0"
            },
            labelrow: {
                width: "100%",
                flexDirection: "row",
                alignItems: "center"
            },
            valueRow: {
                marginTop: 12
            },
            labelTxt: {
                flex: 1,
                fontSize: 14,
                color: "#666"
            },
            first: {
                flex: 0.4,
            },
            second: {
                flex: 0.3
            },
            last: {
                flex: 0.6
            },
            valueTxt: {
                flex: 1,
                fontSize: 18,
                color: "#333",
                fontWeight: "bold"
            },
            typeLayout: {
                flex: 0.3
            },
            typeTxt: {
                width: 20,
                backgroundColor: "#f00",
                textAlign: "center",
                textAlignVertical: "center",
                color: "#fff",
                borderRadius: 4,
                fontWeight: "bold"
            }
        })
        return (<View style={styles.itemLayout}>
            <View style={styles.labelrow}>
                <Text style={[styles.labelTxt, styles.first]}>序号</Text>
                {showLabel && <Text style={[styles.labelTxt, styles.second]}>类型</Text>}
                <Text style={[styles.labelTxt]}>消费名称</Text>
                <Text style={[styles.labelTxt, styles.last]}>消费金额</Text>
            </View>
            <View style={[styles.labelrow, styles.valueRow]}>
                <Text style={[styles.valueTxt, styles.first]}>{item.index}</Text>
                {showLabel && <View style={styles.typeLayout}>
                    <Text style={[styles.typeTxt, { backgroundColor: TypeColors[item.type] }]}>{item.type}</Text>
                </View>}
                <Text style={[styles.valueTxt]}>{item.name}</Text>
                <Text style={[styles.valueTxt, styles.last]}>{item.amount}</Text>
            </View>
        </View>)
    }
    return (
        <View style={styles.root}>
            <View style={styles.titleLayout}>
                <Text style={styles.titleTxt}>消费记账单</Text>
                <Switch style={styles.switch} value={showLabel} onValueChange={value => setShowLabel(value)} />
                <Button title='切换数据' onPress={() => {
                    setData(ListData2)
                }} />
            </View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => `${item.index}`}
                renderItem={renderItem}
            />
            <View style={styles.totalLayout}>
                <Text style={styles.totalTxt}>{calculateTotal}</Text>
                <Text style={styles.totalTxt}>合计:</Text>
            </View>
        </View>
    )
}

export default ConsumeList

const styles = StyleSheet.create({
    root: {
        // flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff"
    },
    titleLayout: {
        width: "100%",
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"

    },
    titleTxt: {
        fontSize: 18,
        color: "#333",
        fontWeight: "bold",
    },
    totalLayout: {
        width: "100%",
        height: 60,
        flexDirection: "row-reverse",
        borderTopWidth: 1,
        borderColor: "#c0c0c0",
        alignItems: "center",
        paddingHorizontal: 16
    },
    totalTxt: {
        fontSize: 16,
        color: "#333",
        fontWeight: "bold",
    },
    switch: {
        position: "absolute",
        right: 16
    }
})