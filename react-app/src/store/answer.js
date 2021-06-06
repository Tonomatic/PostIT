// constants
const GET_ANSWER = "answer/GET_ANSWER";
const MAKE_ANSWER = "answer/MAKE_ANSWER"
// const DELETE_POST = "post/DELETE_POST"

const getAnswer = (list) => ({
    type: GET_ANSWER,
    payload: list
})

const makeAnswer = (content) => ({
    type: MAKE_ANSWER,
    payload: content
})



// export const myAnswer = (postId) => async (dispatch) => {
//     const res = await fetch(`/api/friends/${userId}`, {
//         headers: {
//             "Content-Type": "application/json"
//         },
//     });
//     if (res.ok) {
//         const data = await res.json();
//         dispatch(getFriend(data))
//     }
// }

// export const createFriend = (friendId) => async (dispatch) => {
//     const res = await fetch(`/api/friends/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             friendId
//         })
//     });

//     const data = await res.json();
//     if (data.errors) {
//         return data;
//     }
//     dispatch(makeFriend(data))
//     return {};
// }



const initialState = {asnwers: []}

export default function answerReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_ANSWER:
            newState = action.payload
            return newState;
        // case MAKE_FRIEND:
        //     const friends = [...state.friends, action.payload]
        //     newState = {friends}
        //     return newState
        default:
            return state;
    }
}
