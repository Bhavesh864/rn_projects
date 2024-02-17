import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import Icons from 'react-native-vector-icons/EvilIcons';

const ShowScreen = ({ route, navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => { navigation.navigate('Edit', { id: route.params.id }) }}>
                    <Icons size={35} name='pencil' style={{ color: 'black' }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{blogPost.title}</Text>
            <Text style={styles.text}>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
})

export default ShowScreen
