import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function ListScreen() {
    const friends = [
        { name: 'Name 1', age: 20 },
        { name: 'Name 2', age: 25 },
        { name: 'Name 3', age: 30 },
        { name: 'Name 4', age: 35 },
        { name: 'Name 5', age: 40 },
        { name: 'Name 6', age: 45 },
        { name: 'Name 7', age: 50 },
        { name: 'Name 8', age: 55 },
        { name: 'Name 9', age: 60 },
    ]

    return (

        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }} />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
})