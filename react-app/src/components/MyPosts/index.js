import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myPosts, createPost } from "../../store/post";
import './MyPosts.css'


const MyPosts = () => {
    const [post, setPost] = useState("")
    const [lestate, setLestate] = useState(false)
    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.post.posts)
    const dispatch = useDispatch();
    console.log(posts)
    // console.log(user.id)

    useEffect(() => {
        if (user) {
            dispatch(myPosts((user.id)))
            setLestate(true)
        }
    }, [dispatch])

    return (
        <div id="myPostsTop">
            MyPosts Test Route
            <div id="myPosts">
                {posts?.map((post) => (
                    <div>
                        <div>Question {post.id}:</div>
                        <li>{post.content}</li>
                        {/* This shows the 1st answer to the 1st question. Must change  */}
                        {/* <div>{posts[0].answers[0].content}</div> */}
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default MyPosts
