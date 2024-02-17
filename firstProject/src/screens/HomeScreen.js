import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textstyle}>Hi, there!</Text >
            <Button
                title='Go To Components Screen'
                onPress={() => navigation.navigate('Components')}
            />
            <Button

                title='Go To List Screen'
                onPress={() => navigation.navigate('List')}
            />
            <Button
                title='Go To Image Screen'
                onPress={() => navigation.navigate('Image')}
            />
            <Button
                title='Go To Counter Screen'
                onPress={() => navigation.navigate('Counter')}
            />
            <Button
                title='Go To Color Screen'
                onPress={() => navigation.navigate('Color')}
            />
            <Button
                title='Go To Square Screen'
                onPress={() => navigation.navigate('Square')}
            />
            <Button
                title='Go To TextInput Screen'
                onPress={() => navigation.navigate('TextInput')}
            />
            <Button
                title='Go To Box Screen'
                onPress={() => navigation.navigate('Box')}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 30
    },

});

export default HomeScreen;