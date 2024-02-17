import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const ResultDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
            <Text style={styles.nameStyle}>{result.name} </Text>
            <Text style={{ color: 'black' }}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nameStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    imageStyle: {
        height: 120,
        width: 250,
        borderRadius: 5,
        marginBottom: 5
    },
    container: {
        marginLeft: 15
    }

});

export default ResultDetails
