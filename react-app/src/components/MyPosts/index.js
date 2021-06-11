import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myPosts, createPost, noMorePost, editPost } from "../../store/post";
import './MyPosts.css'


const MyPosts = () => {
    const [chatInput, setChatInput] = useState("");
    const [chatEdit, setChatEdit] = useState("");
    const [postId, setPostId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    //Does not like this
    //consider using 0

    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.post.posts)
    const dispatch = useDispatch();
    console.log(postId)
    
    useEffect(() => {
        console.log("this is loading", isLoading)
        dispatch(myPosts((user.id)))
    }, [dispatch, isLoading])

    const updateChatInput = (e) => {
        e.preventDefault();
        setChatInput(e.target.value)
    };
    const updatePost = (e) => {
        e.preventDefault();
        setPostId(e.target.value)
    };

    // IS NOT WORKING YET, WILL FIX SOON
    // const bringBackText = (e) => {
    //     setPlaceHolder("Question")
    // };

    const deletePost = (postId) => {
        setIsLoading(true)
        dispatch(noMorePost(postId))
        // history.push("/")
    }

    const editing = async (e) => {
        e.preventDefault()
        await dispatch(editPost(postId, chatInput))
    }

    // const postForm = async (e) => {
    //     e.preventDefault()
    //     await dispatch(createPost(user.id, chatInput))
    // }

    const editQuestion = () => {
        return
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
                {posts?.map((post) => (
                    <div key={post.id} id="ddiiv">
                        <div onClick={editQuestion()} id="note">
                            <button class="circle" onClick={() => {
                                deletePost(post.id);
                            }}>X
                            </button>
                            <div id="noteHeading">Question:</div>
                            <div id="noteContent" key={post.id}> {post.content}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <input
                    placeholder="select post id"
                    value={postId}
                    onChange={updatePost}
                >
                </input>
                <form onSubmit={editing} method="POST" id="ddiiv">
                    <textarea
                        id="note"
                        placeholder="Edit Post"
                        value={chatInput}
                        onChange={updateChatInput}
                    />
                    <div id="containerButtonWrapper">
                        <button type="submit" id="postingButton">Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MyPosts
