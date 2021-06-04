import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myPosts, createPost, noMorePost } from "../../store/post";
import './MyPosts.css'


const MyPosts = () => {
    const [chatInput, setChatInput] = useState("");
    const [placeHolder, setPlaceHolder] = useState("Question");
    const [post, setPost] = useState(null);
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
        e.preventDefault();
        setChatInput(e.target.value)
    };

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
        return <Redirect to="/posts" />;
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
            <form onSubmit={deletePost}>
               <h1 id="server__question">Do you want to delete this Post??</h1>
               <input
                    placeholder="What post would you like to delete"
                    value={post}
                    onChange={updatePost}
                />
               <button type="submit" id="delete" className="delete__buttons">Delete</button>
            </form>
            <form onSubmit={postForm} id="postForm" method="POST">
                <input
                    id="formInput"
                    placeholder={placeHolder}
                    value={chatInput}
                    onChange={updateChatInput}
                />
                <button type="submit" onClick={bringBackText}>Post</button>
            </form>

        </div>
    )
}

export default MyPosts
