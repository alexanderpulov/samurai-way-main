import React from 'react';
import s from "./Post.module.css";

type PostType = {
    message: string
    likeCount: number
}

const Post = (props: PostType) => {
    return (
        <div>
            <img className={s.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxngNnAA_1TaVkcPBbn3s8gFL_lS6_evq9TVIF4HoR3JbKhGON1Tm_tINW1zNjNidDzI&usqp=CAU" alt=""/>
            <span className={s.titleColor}>{props.message}</span>
            <span> like: {props.likeCount}</span>
        </div>
    );
};

export default Post;