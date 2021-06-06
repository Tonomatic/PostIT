import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myPosts, createPost, noMorePost, myAnswers } from "../../store/post";
import './Answers.css'

const MyAnswers = () => {
    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.post.posts)
    console.log(posts)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            dispatch(myAnswers((user.id)))
        }
    }, [dispatch])

    return (
        <div id="myAnswersTop">
            <div id="myAnswers">
                {posts?.map((post) => (
                    post.answers?.map((answer) => (
                        <li>{answer.content}</li>
                    ))
                )
                )}
            </div>
        </div>
    )

}

export default MyAnswers
