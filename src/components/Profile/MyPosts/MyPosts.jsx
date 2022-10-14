import React from 'react';
import s from './Myposts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
    <div>
        My posts
        <div>
            <textarea></textarea>
                        <button>Add post</button>
        </div>
    <div>
        New posts
    </div>
    <div className={s.posts}>
        <div className={s.item}>
            <Post/>
            <Post />
            <Post />
            <Post />
    </div>
</div>
    </div>
)
}

export default MyPosts