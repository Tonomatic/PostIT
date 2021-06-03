import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myPosts } from "../../store/post";
import './MyPosts.css'


const MyPosts = () => {
    const [post, setPost] = useState("")
    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.post.posts)
    const dispatch = useDispatch();
    console.log(posts)
    useEffect(() => {
        console.log("WE GOT INTO THE USEeFFECT", posts)
        dispatch(myPosts((user.id)))
    }, [user])


    return (
        <div>
            MyPosts Test Route
            <div>
                {posts?.map((post) => (
                    <li>
                        {post}
                    </li>
                ))}
            </div>
        </div>
    )
}

export default MyPosts
