import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myFriends } from "../../store/friend";
import './Friends.css'


const Friends = () => {

    const user = useSelector(state => state.session.user)
    const friend = useSelector(state => state.friend.friends)
    const dispatch = useDispatch();
    console.log(friend)
    console.log(user)
    useEffect(() => {
        dispatch(myFriends(user.id))
        console.log(friend)
    }, [dispatch])


    return(
        <div>
            Friends Route
            <div>
                {}
            </div>
        </div>
    )
}


export default Friends
