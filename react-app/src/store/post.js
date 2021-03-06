// constants
const GET_POST = "post/GET_POST";
const MAKE_POST = "post/MAKE_POST"
const DELETE_POST = "post/DELETE_POST"
const GET_ANSWER = "post/GET_ANSWER"
// const SET_POST = "post/SET_POST"

const getPost = (list) => ({
    type: GET_POST,
    payload: list
})

const makePost = (content) => ({
    type: MAKE_POST,
    payload: content
})

const getAnswer = (list) => ({
    type: GET_ANSWER,
    payload: list
})

// const setPost = (list) => ({
//     type: SET_POST,
//     payload:list
// })

const deletePost = (content) => ({
    type: DELETE_POST,
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

export const friendsPosts = () => async (dispatch) => {
    const res = await fetch(`/api/posts/home`, {
        headers: {
            "Content-Type": "application/json"
        },
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(getPost(data))
    }
}

export const myAnswers = (userId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${userId}`, {
        headers: {
            "Content-Type": "application/json"
        },
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(getAnswer(data))
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


export const editPost = (postId, content) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content
        })
    })

    const data = await res.json();
    dispatch(makePost(data))
    return {};
}

export const noMorePost = (id) => async (dispatch) => {
    const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    dispatch(deletePost(data))
    return
}

const initialState = {posts: [], answers: []}

export default function postReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_POST:
            newState = action.payload
            return newState;
        case GET_ANSWER:
            newState = action.payload
            return newState
        case MAKE_POST:
            const posts = [...state.posts, action.payload]
            newState = {posts}
            return newState
        // case SET_POST:
        //     newState = [...state.posts]
        //     newState[action.payload.posts.id] = action.payload.list
        // //Is not working
        case DELETE_POST:
            const post = [...state.posts]
            newState = {post}
            delete newState[action.payload.id];
            return newState
        default:
            return state;
    }
}
