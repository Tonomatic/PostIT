import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myPosts, createPost } from "../../store/post";
import './MyPosts.css'


const MyPosts = () => {
    const [chatInput, setChatInput] = useState("");
    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.post.posts)
    const dispatch = useDispatch();
    console.log(posts)
    // console.log(user.id)
    console.log(chatInput)

    useEffect(() => {
        if (user) {
            dispatch(myPosts((user.id)))
        }
    }, [dispatch])

    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    };

    const postForm = async (e) => {
        e.preventDefault()
        await dispatch(createPost(user.id, chatInput))
    }


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
            <form onSubmit={postForm} id="postForm" method="POST">
                <input
                    id="formInput"
                    placeholder="Question"
                    value={chatInput}
                    onChange={updateChatInput}
                />
                {/* <button type="submit">Post</button> */}
            </form>

        </div>
    )
}

export default MyPosts
