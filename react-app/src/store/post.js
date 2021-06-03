// constants
const GET_POST = "post/GET_POST";

const getPost = (data) => ({
    type: GET_POST,
    payload: data
})

export const myPosts = (userId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${userId}`, {
        headers: {
            "Content-Type": "application/json"
        },
    });
    if(res.ok) {
        const data = await res.json();
        console.log(data)
        dispatch(getPost(data))
    }
}

export default function reducer(state=[], action) {
    let newState;
    switch (action.type) {
        case GET_POST:
            newState = action.payload.posts
            return newState;
        default:
            return state;
    }
}
