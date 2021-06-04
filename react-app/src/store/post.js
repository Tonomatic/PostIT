// constants
const GET_POST = "post/GET_POST";
const MAKE_POST = "post/MAKE_POST"

const getPost = (list) => ({
    type: GET_POST,
    payload: list
})

const makePost = (content) => ({
    type: MAKE_POST,
    payload: content
})

export const myPosts = (userId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${userId}`, {
        headers: {
            "Content-Type": "application/json"
        },
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(getPost(data))
    }
}

export const createPost = (id, content) => async (dispatch) => {
    const res = await fetch(`/api/posts/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content
        })
    });

    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(makePost(data))
    return {};

}


const initialState = {posts: []}

export default function postReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_POST:
            newState = action.payload
            return newState;
        case MAKE_POST:
            const posts = [...state.posts, action.payload]
            newState = {posts}
            return newState
        default:
            return state;
    }
}
