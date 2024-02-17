import createDataContext from "./createDataContext";

const blogPostReducer = (state, action) => {
    switch (action.type) {

        case 'get_blogpost':
            return action.payload;

        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });

        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);

        default:
            return state;
    }
}

const baseURL = 'https://e167-2401-4900-1c1b-a88d-597b-b017-81d9-18c1.in.ngrok.io';

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await fetch(`${baseURL}/blogposts`).then((res) => res.json()).then(resJson => {
            console.log(resJson);
            dispatch({ type: 'get_blogpost', payload: resJson });
        }).catch(e => { console.log(e); })
    }
}


const addBlogPosts = (dispatch) => {
    return async (title, content, callback) => {
        await fetch(`${baseURL}/blogposts`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content,
                })
            });
        if (callback) {
            callback();
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await fetch(`${baseURL}/blogposts/${id}`,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
        dispatch({ type: 'delete_blogpost', payload: id });
    }
}

const editBlogPost = (dispatch) => {
    return async (title, content, id) => {
        await fetch(`${baseURL}/blogposts/${id}`,
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content,
                })
            });
        dispatch({ type: 'edit_blogpost', payload: { title, content, id } });
    }
}

export const { Context, Provider } = createDataContext(
    blogPostReducer,
    { addBlogPosts, deleteBlogPost, editBlogPost, getBlogPosts },
    [],
);