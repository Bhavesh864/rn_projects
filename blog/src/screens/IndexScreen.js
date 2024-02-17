import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';

const IndexScreen = ({ navigation }) => {
    const { state, getBlogPosts, deleteBlogPost } = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('focus', () => {
            getBlogPosts();
        })

        return listener;
    }, [])


    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('Show', { id: item.id }) }}>
                            <View style={styles.container}>
                                <Text style={[styles.black, styles.text]}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                                    <Feather name='trash' style={[styles.black, styles.icon]} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = () => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} style={styles.black} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    black: {
        color: 'black'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: 'black',
        borderTopWidth: 1,
        padding: 15,
    },
    icon: {
        fontSize: 25
    },
    text: {
        fontSize: 20
    }
})

export default IndexScreen
