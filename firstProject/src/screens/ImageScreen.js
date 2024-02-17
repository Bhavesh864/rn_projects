import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')} count={1} />
            <ImageDetail title='Beach' imageSource={require('../../assets/beach.jpg')} count={2} />
            <ImageDetail title='Moutain' imageSource={require('../../assets/mountain.jpg')} count={3} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen



