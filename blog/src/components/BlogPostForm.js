import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues === undefined ? '' : initialValues.title);
    const [content, setContent] = useState(initialValues === undefined ? '' : initialValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter Title:</Text>
            <TextInput
                value={title}
                onChangeText={(text) => { setTitle(text) }}
                style={styles.input}
                placeholder='Enter Title'
            />
            <Text style={styles.text}>Enter Content:</Text>
            <TextInput
                value={content}
                onChangeText={(text) => { setContent(text) }}
                style={styles.input}
                placeholder='Enter Content'
            />
            <Button
                onPress={() => { onSubmit(title, content) }}
                title='Save Blog Post'
            />
        </View>
    )
}

// BlogPostForm.defaultProps = {
//     initialValues: {
//         title: '',
//         content: '',
//     }
// }

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        fontSize: 20,
        borderColor: 'black',
        marginBottom: 25,
        paddingHorizontal: 5
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
})


export default BlogPostForm;