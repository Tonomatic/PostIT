import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myPosts, createPost, noMorePost } from "../../store/post";
import './MyPosts.css'


const MyPosts = () => {
    const [chatInput, setChatInput] = useState("");
    const [placeHolder, setPlaceHolder] = useState("Question");
    //Does not like this
    //consider using 0

    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.post.posts)
    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            dispatch(myPosts((user.id)))
        }
    }, [dispatch])

    const updateChatInput = (e) => {
        e.preventDefault();
        setChatInput(e.target.value)
    };

    // IS NOT WORKING YET, WILL FIX SOON
    const bringBackText = (e) => {
        setPlaceHolder("Question")
    };

    const deletePost = (postId) => {
        dispatch(noMorePost(postId))
        // history.push("/")
    }

    const postForm = async (e) => {
        e.preventDefault()
        await dispatch(createPost(user.id, chatInput))
    }

    return (
        <div id="myPostsTop">
            <div id="secondBlock">
                MyPosts
            </div>
            <div id="postsWrapper">
                {/* <div>
                    <form onSubmit={postForm} method="POST" id="ddiiv">
                        <textarea
                            id="note"
                            placeholder={placeHolder}
                            value={chatInput}
                            onChange={updateChatInput}
                        />
                        <div id="containerButtonWrapper">
                            <button type="submit" id="postingButton" onClick={bringBackText}>Post</button>

                        </div>

                    </form>
                </div> */}
                {/* <div id="myPosts" >
                    {posts?.map((post) => (
                        <div key={post.id} id="myPostsContainer">
                            <div>Question {post.id}:</div>
                            <li key={post.id}> {post.content}</li>
                        </div>
                    ))}
                </div> */}
                {posts?.map((post) => (
                    <div key={post.id} id="ddiiv">
                        <div id="note">
                            <button class="circle" onClick={() => {
                                deletePost(post.id);
                            }}>X
                            </button>
                            <div id="noteHeading">Question:</div>
                            <div id="noteContent" key={post.id}> {post.content}</div>
                        </div>
                    </div>
                ))}
                {/* <form onSubmit={deletePost}>
                    <h1 id="server__question">Do you want to delete this Post??</h1>
                    <input
                        placeholder="What post would you like to delete"
                        value={post}
                        onChange={updatePost}
                    />
                    <button type="submit" id="delete" className="delete__buttons">Delete</button>
                </form> */}
            </div>


        </div>
    )
}

export default MyPosts
