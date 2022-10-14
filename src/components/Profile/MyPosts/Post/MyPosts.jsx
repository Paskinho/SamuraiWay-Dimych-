import React from 'react';
import s from './Myposts.module.css'

const MyPosts = () => {
    return (
    <div>
        My posts
    </div>
    <div>
        New posts
    </div>
    <div className={s.posts}>
        <div className={s.item}>
            post 1
        </div>
        <div className={s.item}>
            post 2
        </div>
    </div>
</div>
)
}

export default MyPosts