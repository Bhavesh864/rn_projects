import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp';


const ResultsShowScreen = ({ route }) => {
    const { id } = route.params;
    const [result, setResult] = useState(null);


    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return <Text style={styles.loading}>Loading....</Text>
    }

    return (
        <View>
            <FlatList
                data={result.photos}
                keyExtractor={(photos) => photos}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 250,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 5
    },
    loading: {
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: '50%',
    }
})

export default ResultsShowScreen
