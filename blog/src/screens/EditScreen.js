import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({ route, navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(title, content, route.params.id);
            navigation.pop();
        }}
    />
}

export default EditScreen

const styles = StyleSheet.create({})