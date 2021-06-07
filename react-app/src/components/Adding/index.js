import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myPosts, createPost, noMorePost } from "../../store/post";
import '../MyPosts/MyPosts.css'


const Adding = () => {
    const [chatInput, setChatInput] = useState("");
    const [placeHolder, setPlaceHolder] = useState("Question");
    //Does not like this
    //consider using 0
    const [post, setPost] = useState(null);
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

    const updatePost = (e) => {
        setPost(e.target.value)
    };

    const deletePost = (e) => {
        e.preventDefault();
        dispatch(noMorePost(post))
        // history.push("/")
    }

    const postForm = async (e) => {
        e.preventDefault()
        await dispatch(createPost(user.id, chatInput))
    }


    return (
        <div id="myPostsTop">
            {/*this is the code for the postIt with the question*/}
            <div id="ddiiv">
                <form onSubmit={postForm} method="POST">
                    <textarea
                        id="note"
                        placeholder={placeHolder}
                        value={chatInput}
                        onChange={updateChatInput}
                    />
                    <button type="submit" onClick={bringBackText}>Post</button>
                </form>
            </div>
        </div>
    )
}

export default Adding
