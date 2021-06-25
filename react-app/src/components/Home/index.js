import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myPosts, friendsPosts, noMorePost } from "../../store/post";
import { myFriends, createFriend } from "../../store/friend";
import { createAnswer } from "../../store/answer";
import './Home.css'
import ReactModal from 'react-modal'
import User from "../User"

const Home = () => {
    const [chatInput, setChatInput] = useState("");
    const [post, setPost] = useState(null);
    const [postContent, setPostContent] = useState("");
    const [open, setOpen] = useState(false);
    // const [userhuh, setUserhuh] = useState(false)
    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.post.posts)
    const friends = useSelector(state => state.friend.friends)
    const dispatch = useDispatch();
    let x;
    console.log(user)
    useEffect(() => {
        if (user) {
            dispatch(friendsPosts())
        }
    }, [dispatch, open])

    useEffect(() => {
        dispatch(myFriends(user.id))
        x = friends?.map((friend) => {
            let ide = friend.id
            return posts.ide

        })
    }, [dispatch])

    const answerForm = async (e) => {
        e.preventDefault()
        await dispatch(createAnswer(chatInput, post))
    }
    const close = () => {
        setOpen(false)
    }
    //MUST CHANGE FILTER METHOD, NOT REALLY EFFICIENT
    const mapping = () => {
        let friend1 = friends.map(friend => friend.id)
        let temp = posts?.filter((post) => friend1.includes(post.userId))
        return temp?.map((post, id) => (
            <div key={post.id} id="ddiiv">
                <div id="notess">
                    {/* <button class="circle2" onClick={() => {
                        deletePost(post.id);
                    }}>X
                    </button> */}
                    <div id="noteContent" key={post.id}>By User {post.userId}: {post.content}</div>
                    <button id="answerButton" onClick={() => {
                        answerModal(post.id, post.content);
                    }}>
                        Answer:
                    </button>
                </div>
            </div>
        ))
    }


    const updateChat = (e) => {
        e.preventDefault();
        setChatInput(e.target.value)
    };

    const answerModal = (postId, content) => {
        setOpen(true)
        setPost(postId)
        setPostContent(content)
        return
    }

    const deletePost = (postId) => {
        dispatch(noMorePost(postId))
    }
    return (
        <div id="myPostsTop">
            <div id="secondBlock">
                Posts
            </div>
            <div id="postWrapper">
                {mapping()}
                <div id="AddContainer">
                    <ReactModal
                        isOpen={open}
                        className="editable"
                        onRequestClose={close}
                    >
                        <div id="postWrapper">
                            <div id="ddiiv">
                                <div id="notess">
                                    <div></div>
                                    <div id="noteContent">Question {post}: {postContent}</div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={answerForm} id="answerForm" method="POST">
                            <input
                                id="formInput"
                                placeHolder="Answer"
                                value={chatInput}
                                onChange={updateChat}
                            />
                        </form>
                        <button id="closeModal" onClick={close}>Exit</button>
                    </ReactModal>

                </div>
            </div>


        </div>
    )
}

export default Home
