// constants
const GET_POST = "post/GET_POST";
const MAKE_POST = "post/MAKE_POST"

const getPost = (list) => ({
    type: GET_POST,
    payload: list
})

const makePost = (list) => ({
    type: MAKE_POST,
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

// export const makePost = (id, content) => async (dispatch) => {
//     const res = await fetch(`/api/posts/${id}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             content
//         })
//     });

//     const data = await res.json();
//     if(data.errors) {
//         return data;
//     }

// }

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
