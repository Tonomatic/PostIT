import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myPosts, friendsPosts, noMorePost } from "../../store/post";
import { myFriends, createFriend } from "../../store/friend";
import { createAnswer } from "../../store/answer";
import './Home.css'
import ReactModal from 'react-modal'


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
    console.log(posts)
    console.log(friends)
    console.log("this is the friends of the user", friends)
    let x;
    useEffect(() => {
        if (user) {
            dispatch(friendsPosts())
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(myFriends(user.id))
        x = friends?.map((friend) => {
            let ide = friend.id
            return posts.ide

        })
        console.log(x)
        console.log(friends)
    }, [dispatch])

    const answerForm = async (e) => {
        e.preventDefault()
        await dispatch(createAnswer(chatInput, post))
    }

    //MUST CHANGE FILTER METHOD, NOT REALLY EFFICIENT
    const mapping = () => {
        let friend1 = friends.map(friend => friend.id)
        console.log(friend1)
        let temp = posts?.filter((post) => friend1.includes(post.userId))
        console.log(posts)
        console.log(temp)
        return temp?.map((post, id) => (
            <div key={post.id} id="ddiiv">
                <div id="notess">
                    <button class="circle2" onClick={() => {
                        deletePost(post.id);
                    }}>X
                    </button>
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

    const close = () => {
        setOpen(false)
    }


    const updateChat = (e) => {
        e.preventDefault();
        setChatInput(e.target.value)
    };

    const answerModal = (postId, content) => {
        setOpen(true)
        setPost(postId)
        setPostContent(content)
        return (
            <div id="AddContainer">
                <ReactModal
                    isOpen={open}
                    id="editable"

                >
                    <form onSubmit={answerForm} id="answerForm" method="POST">
                        <input
                            id="formInput"
                            placeHolder="Answer"
                            value={chatInput}
                            onChange={updateChat}
                        />
                    </form>
                    <button id="closeModal" onClick={close}>Close Modal</button>
                </ReactModal>
            </div>

        )
    }

    const deletePost = (postId) => {
        dispatch(noMorePost(postId))
    }
    return (
        <div id="myPostsTop">
            <div id="secondBlock">
                Posts
            </div>
            <div id="postWrapper1">
                {mapping()}
                <div id="AddContainer">
                    <ReactModal
                        isOpen={open}
                        id="editable"
                    >
                        <div id="questionAnswerContent">
                            Question {post}: {postContent}
                            <form onSubmit={answerForm} id="answerForm" method="POST">
                                <input
                                    id="formInput"
                                    placeHolder="Answer"
                                    value={chatInput}
                                    onChange={updateChat}
                                />
                            </form>
                            <button id="closeModal" onClick={close}>Close Modal</button>
                        </div>
                    </ReactModal>

                </div>
            </div>


        </div>
    )
}

export default Home
