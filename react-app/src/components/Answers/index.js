import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myAnswers } from "../../store/post";
import { createAnswer } from "../../store/answer";
import './Answers.css'

const MyAnswers = () => {
    const user = useSelector(state => state.session.user);
    const posts = useSelector(state => state.post.posts);
    const answers = useSelector(state => state.answer.answers)

    const [chatInput, setChatInput] = useState("");
    const [post, setPost] = useState(null);
    console.log(post)
    console.log(posts)
    console.log(answers)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            dispatch(myAnswers((user.id)))
        }
    }, [dispatch])


    const updateChat = (e) => {
        e.preventDefault();
        setChatInput(e.target.value)
    };

    const updatePost = (e) => {
        setPost(e.target.value)
    };

    const answerForm = async (e) => {
        e.preventDefault()
        await dispatch(createAnswer(chatInput, post))
    }

    return (
        <div id="myAnswersTop">
            <div id="secondBlock">
                Answers
            </div>
            <div id="myAnswers">
                {posts?.map((post) => (
                    <div>
                        This is the Question
                        <li>{post.content}</li>
                        Answers:
                        {post.answers?.map((answer) => (
                            <div>{answer.content}</div>
                        ))}
                    </div>
                )
                )}
            </div>
            <input
                placeHolder="Select PostId"
                value={post}
                onChange={updatePost}
            />
            <form onSubmit={answerForm} id="answerForm" method="POST">
                <input
                    id="formInput"
                    placeHolder="Answer"
                    value={chatInput}
                    onChange={updateChat}
                />
            </form>
        </div>
    )

}

export default MyAnswers
