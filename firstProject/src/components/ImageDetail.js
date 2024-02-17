import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ imageSource, title, count }) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text> Image Count {count} </Text>
            <Text> {title} Image Detail </Text>
        </View>
    )
}

const styles = StyleSheet.create({});


export default ImageDetail;
