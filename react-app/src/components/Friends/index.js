import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myFriends } from "../../store/friend";
import './Friends.css'


const Friends = () => {

    const user = useSelector(state => state.session.user)
    const friends = useSelector(state => state.friend.friends)
    const [statee, setStatee] = useState(true);
    const dispatch = useDispatch();
    console.log(friends)
    console.log(user)
    useEffect(() => {
        dispatch(myFriends(user.id))
        console.log(friends)
    }, [dispatch, statee])


    return (
        <div id="myFriendsTop">
            <div>
                {friends?.map((friend) => (
                    <div key={friend.id} id="friends container">
                        <li key={friend.id}>{friend.username}</li>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Friends
