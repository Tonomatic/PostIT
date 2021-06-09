import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myPosts, createPost, noMorePost } from "../../store/post";
import './Home.css'
import { createAnswer } from "../../store/answer";
import ReactModal from 'react-modal'


const Home = () => {
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


    const answerForm = async (e) => {
        e.preventDefault()
        await dispatch(createAnswer(chatInput, post))
    }


    const close = () => {
        setOpen(false)
    }


    const updateChat = (e) => {
        e.preventDefault();
        setChatInput(e.target.value)
    };

    const answerModal = (postId) => {
        setOpen(true)
        setPost(postId)
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
            <div id="postWrapper">

                {posts?.map((post) => (
                    <div key={post.id} id="ddiiv">
                        <div id="notes">
                            <button class="circle2" onClick={() => {
                                deletePost(post.id);
                            }}>X
                            </button>
                            <div id="noteHeading">Question:</div>
                            <div id="noteContent" key={post.id}> {post.content}</div>
                            <button id="answerButton" onClick={() => {
                                answerModal(post.id);
                            }}>
                                Answer:
                            </button>
                        </div>
                    </div>
                ))}
                <div id="AddContainer">
                    <ReactModal
                        isOpen={open}
                        id="editable"
                    // onRequestClose={close}
                    >
                        <button id="closeModal" onClick={close}>Close Modal</button>
                    </ReactModal>

                </div>
            </div>


        </div>
    )
}

export default Home
