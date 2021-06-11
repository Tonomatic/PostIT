import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myFriends, createFriend, unfriend } from "../../store/friend";
import './Friends.css'


const Friends = () => {

    const user = useSelector(state => state.session.user)
    const friends = useSelector(state => state.friend.friends)
    const [isLoading, setIsLoading] = useState(false);
    const [friendId, setFriendId] = useState(null)
    const [friendThis, setFriendThis] = useState(null)
    const dispatch = useDispatch();

    console.log("this is the friends",friends)
    console.log("this is the user",user)
    console.log(friendThis)
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

    const deleteFriend = async (e) => {
        e.preventDefault();
        // setIsLoading(true)
        await dispatch(unfriend(friendThis))
        // history.push("/")
    }

    const friendForm = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await dispatch(createFriend(friendId))
    }

    return (
        <div id="myFriendsTop">
            <div id="secondBlock">
                Friends
            </div>
            <div id="tableWrapper">
                <table>
                    <tr>
                        <th>My Friends</th>
                    </tr>
                    <tr id="myFriends">
                        {friends?.map((friend, id) => (
                            <table id="secondTable">
                                <tr id="secondRow">
                                    <td id="secondD" key={friend.id}>{id}: {friend.username}</td>
                                </tr>
                            </table>
                        )
                        )}
                    </tr>

                </table>
            </div>
            {/* <div>
                {friends?.map((friend) => (
                    <div key={friend.id} id="friends container">
                        <li key={friend.id}>{friend.username}</li>
                    </div>
                ))}
            </div> */}
            <form onSubmit={friendForm} id="postForm" method="POST">
                <input
                    id="formInput"
                    placeholder="Pick a friend by his ID"
                    value={friendId}
                    onChange={updateFriendInput}
                />
                <button type="submit">Add</button>
            </form>
            <form onSubmit={deleteFriend}>
                <input
                    placeholder="select friend"
                    value={friendThis}
                    onChange={updateDelete}
                />
                <button type="submit">Delete</button>
            </form>

        </div>
    )
}


export default Friends
