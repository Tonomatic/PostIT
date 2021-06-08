import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myFriends, createFriend } from "../../store/friend";
import './Friends.css'


const Friends = () => {

    const user = useSelector(state => state.session.user)
    const friends = useSelector(state => state.friend.friends)
    const [friendId, setFriendId] = useState(null)
    // const [statee, setStatee] = useState(true);
    const dispatch = useDispatch();
    console.log(friends)
    console.log(user)
    useEffect(() => {
        dispatch(myFriends(user.id))
        console.log(friends)
    }, [dispatch])

    const updateFriendInput = (e) => {
        e.preventDefault();
        setFriendId(e.target.value)
    }


    const friendForm = async (e) => {
        e.preventDefault()
        await dispatch(createFriend(friendId))
    }

    return (
        <div id="myFriendsTop">
            <div id="secondBlock">
                Friends
            </div>
            <div>
                {friends?.map((friend) => (
                    <div key={friend.id} id="friends container">
                        <li key={friend.id}>{friend.username}</li>
                    </div>
                ))}
            </div>
            <form onSubmit={friendForm} id="postForm" method="POST">
                <input
                    id="formInput"
                    placeholder="Pick a friend by his ID"
                    value={friendId}
                    onChange={updateFriendInput}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}


export default Friends
