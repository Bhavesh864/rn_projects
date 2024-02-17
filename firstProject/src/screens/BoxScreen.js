import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.containerOneStyle} />
            <View style={styles.containerTwoStyle} />
            <View style={styles.containerThreeStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'blue',
        borderWidth: 2,
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    containerOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },
    containerTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'lightgreen',
        alignSelf: 'flex-end'
    },
    containerThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'skyblue',
    },
})

export default BoxScreen
