import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const ComponentScreen = () => {
    const firstName = 'Stephen';

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={styles.textstyle}>Getting Started with react native!</Text >
            <Text style={styles.subHeaderStyle}>My name is {firstName}</Text >
        </View>
    );
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 45,
    },
    subHeaderStyle: {
        fontSize: 20,
    },
});

export default ComponentScreen;



