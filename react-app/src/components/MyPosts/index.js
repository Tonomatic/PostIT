import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { myPosts } from "../../store/post";
import './MyPosts.css'


const MyPosts = () => {
    const [post, setPost] = useState("")
    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.post)
    const dispatch = useDispatch();
    console.log(posts)

    useEffect(() => {
        if (user) {
            dispatch(myPosts((user.id)))
        }
    }, [dispatch, user, posts])

    // const myPosts = () => {
    //     if (user && posts) {
    //         return posts.posts.map((post) => {
    //             return (
    //                 <li>
    //                     {post.content}
    //                 </li>
    //             )

    //         })
    //     }
    // }
    return (
        <div id="myPostsTop">
            <div>
                MyPosts Test Route
                {/* {posts?.map((post) => (
                    <li>
                        {post}
                    </li>
                ))} */}
            </div>
        </div>
    )
}

export default MyPosts
