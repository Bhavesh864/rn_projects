import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetails from './ResultDetails';
import { useNavigation } from "@react-navigation/native";

const ResultsList = ({ title, results }) => {
    const navigation = useNavigation();

    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}> {title} </Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={results => results.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ResultsShow', { id: item.id })
                        }}>
                            <ResultDetails result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
    },
    container: {
        marginBottom: 15
    }
})

// export default withNavigation(ResultsList);
export default ResultsList;