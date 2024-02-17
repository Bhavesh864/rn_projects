import React, { Component } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {
    return (
        <View style={styles.backgroundStyle} >
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder='Search'
                placeholderTextColor={'grey'}
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmitted}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'rgb(225, 225,225)',
        height: 50,
        flexDirection: 'row',
        borderRadius: 5,
        margin: 15,
    },
    inputStyle: {
        color: 'black',
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 35,
        marginHorizontal: 10,
    }
});


export default SearchBar;