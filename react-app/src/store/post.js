// constants
const GET_POST = "post/GET_POST";

const getPost = (list) => ({
    type: GET_POST,
    payload: list
})

export const myPosts = (userId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${userId}`, {
        headers: {
            "Content-Type": "application/json"
        },
    });
    if(res.ok) {
        const data = await res.json();
        dispatch(getPost(data))
    }
}

export default function reducer(state=[], action) {
    let newState;
    switch (action.type) {
        case GET_POST:
            newState = action.payload
            return newState;
        default:
            return state;
    }
}