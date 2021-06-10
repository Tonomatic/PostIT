// constants
const GET_FRIEND = "friend/GET_FRIEND";
const MAKE_FRIEND = "friend/MAKE_FRIEND"
const DELETE_FRIEND = "friend/DELETE_FRIEND"

const getFriend = (list) => ({
    type: GET_FRIEND,
    payload: list
})

const makeFriend = (content) => ({
    type: MAKE_FRIEND,
    payload: content
})

const deleteFriend = (content) => ({
    type: DELETE_FRIEND,
    payload: content
})

export const myFriends = () => async (dispatch) => {
    const res = await fetch(`/api/friends/`, {
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


export const unfriend = (id) => async (dispatch) => {
    const res = await fetch(`/api/friends/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    dispatch(deleteFriend(data))
    return
}



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
        case DELETE_FRIEND:
            const friend = [...state.friends]
            newState = {friend}
            delete newState[action.payload.id];
            return newState
        default:
            return state;
    }
}
