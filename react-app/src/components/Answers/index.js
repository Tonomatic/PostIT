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
            <div id="tableWrapper">
                <table>
                    <tr>
                        <th>My Questions</th>
                        <th>Answers</th>
                    </tr>
                    <tr id="myAnswers">
                        <td>
                            {posts?.map((post, id) => (
                                <div>Question {id + 1}: {post.content}</div>
                            )
                            )}
                        </td>
                        <td>
                            {posts?.map((post, id) => (
                            <div>
                                {post.answers?.map((answer) => (
                                    <div>
                                        <div>By User: {answer.userId}</div>
                                        <div>Question {post.id}: {answer.content}</div>
                                    </div>
                                ))}
                            </div>
                        )
                        )}
                        </td>
                        {/* <td>
                            Friends:
                            {posts?.map((post, id) => (
                                <div>
                                    {post.answers?.map((answer) => (
                                        <div>By Friend: {answer.userId}</div>
                                    ))}
                                </div>
                            )
                            )}
                        </td> */}
                    </tr>
                    {/*
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>80</td>
                    </tr> */}
                </table>
            </div>
            {/* <div id="myAnswers">
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
            </div> */}
            {/* <input
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
            </form> */}
        </div>
    )

}

export default MyAnswers
