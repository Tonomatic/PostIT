// constants
const GET_FRIEND = "friend/GET_FRIEND";
const MAKE_FRIEND = "friend/MAKE_FRIEND"
// const DELETE_POST = "post/DELETE_POST"

const getFriend = (list) => ({
    type: GET_FRIEND,
    payload: list
})

const makeFriend = (content) => ({
    type: MAKE_FRIEND,
    payload: content
})

// const deletePost = (content) => ({
//     type: DELETE_POST,
//     payload: content
// })

export const myFriends = (userId) => async (dispatch) => {
    const res = await fetch(`/api/friends/${userId}`, {
        headers: {
            "Content-Type": "application/json"
        },
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(getFriend(data))
    }
}

export const createFriend = (friendId) => async (dispatch) => {
    const res = await fetch(`/api/friends/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            friendId
        })
    });

    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(makeFriend(data))
    return {};
}


// export const noMorePost = (id) => async (dispatch) => {
//     const res = await fetch(`/api/posts/${id}`, {
//         method: 'DELETE'
//     });
//     const data = await res.json();
//     dispatch(deletePost(data))
//     return
// }



const initialState = {friends: []}

export default function friendReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_FRIEND:
            newState = action.payload
            return newState;
        case MAKE_FRIEND:
            const friends = [...state.friends, action.payload]
            newState = {friends}
            return newState
        // case DELETE_POST:
        //     const post = [...state.posts]
        //     newState = {post}
        //     delete newState[action.payload.id];
        //     return newState
        default:
            return state;
    }
}
