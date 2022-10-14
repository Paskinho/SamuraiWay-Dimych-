import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://img.a.transfermarkt.technology/portrait/big/139208-1620651710.jpg?lm=1"/>
            {props.message}
        <div>
        <span>{props.like} likes</span>
    </div>
        </div>




    )
}

export default Post