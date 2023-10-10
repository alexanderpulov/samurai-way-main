import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My post
            <div className={s.titleColor}>New post</div>
            <textarea></textarea>
            <button>add post</button>
            <div>
                <Post message={"Hi, How are you?"}
                      likeCount={4} />
                <Post message={"It is my first post"}
                      likeCount={2} />
            </div>
        </div>
    );
};

export default MyPosts;