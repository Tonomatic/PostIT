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
    const [open, setOpen] = useState(false);

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
        setOpen(!open)
        return (<h2>You just posted a new Question!!</h2>)
    }
    if (open) {
        return <Redirect to="/posts" />;
    }

        return (
            <div id="addingTop">
                <div id="postsWrapper">
                    <div>
                        <form onSubmit={postForm} method="POST" id="ddiiv">
                            <textarea
                                id="note"
                                placeholder="Questionn"
                                value={chatInput}
                                onChange={updateChatInput}
                            />
                            <div id="containerButtonWrapper">
                                <button type="submit" id="postingButton" onClick={bringBackText}>Post</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
}

export default Adding
