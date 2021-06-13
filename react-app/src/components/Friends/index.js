import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myFriends, createFriend, unfriend } from "../../store/friend";
import './Friends.css'
import ReactModal from 'react-modal'
import UsersList from '../UsersList'

const Friends = () => {

    const user = useSelector(state => state.session.user)
    const friends = useSelector(state => state.friend.friends)
    const [isLoading, setIsLoading] = useState(false);
    const [friendId, setFriendId] = useState(null)
    const [open, setOpen] = useState(false);
    const [friendThis, setFriendThis] = useState(null)
    const dispatch = useDispatch();


    const opening = () => {
        setOpen(true)
        return
    }
    const close = () => {
        setOpen(false)
        return

    }

    useEffect(() => {
        dispatch(myFriends())
    }, [dispatch, isLoading])

    const updateFriendInput = (e) => {
        e.preventDefault();
        setFriendId(e.target.value)
    }

    const updateDelete = (e) => {
        e.preventDefault();
        setFriendThis(e.target.value)
    }

    const deleteFriend = async (friendId) => {
        // e.preventDefault();
        await dispatch(unfriend(friendId))
        setIsLoading(!isLoading)
        // await dispatch(unfriend(e))
        // setIsLoading(!isLoading)
        return
    }

    const friendForm = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await dispatch(createFriend(friendId))
    }

    // const modall = () => {
    //     return (<ReactModal
    //         isOpen={true}
    //         onRequestClose={false}
    //     >
    //         Hello
    //     </ReactModal>)
    // }
    return (
        <div id="myFriendsTop">
            <div id="secondBlock">
                Friends
            </div>
            <div id="tableWrapper">
                <div id="othercontent">
                        <ReactModal
                            isOpen={open}
                            onRequestClose={close}
                            className="editable2"
                        >
                            <UsersList />
                        </ReactModal>
                        <button
                            onClick={opening}
                            className="findingFriends"
                        >
                            Find More Friends
                        </button>
                        {friends?.map((friend, id) => (
                            <div id="secondTable">
                                <div id="secondRow">
                                    <div id="secondD" onClick={true} key={friend.id}>{friend.username}</div>
                                    <button id="deleteFriend" onClick={() => {
                                        deleteFriend(friend.id);

                                    }}>x</button>
                                </div>
                            </div>
                        )
                        )}

                </div>
            </div>
            {/* <div>
                {friends?.map((friend) => (
                    <div key={friend.id} id="friends container">
                        <li key={friend.id}>{friend.username}</li>
                    </div>
                ))}
            </div> */}
            {/* <form onSubmit={friendForm} id="postForm" method="POST">
                <input
                    id="formInput"
                    placeholder="Pick a friend by his ID"
                    value={friendId}
                    onChange={updateFriendInput}
                />
                <button type="submit">Add</button>
            </form> */}
            {/* <form onSubmit={deleteFriend}>
                <input
                    placeholder="select friend"
                    value={friendThis}
                    onChange={updateDelete}
                />
                <button type="submit">Delete</button>
            </form> */}

        </div>
    )
}


export default Friends
