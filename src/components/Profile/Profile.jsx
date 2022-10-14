import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return   <div className={s.content}>
        <div> <img src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2021-06/placeholder.jpg?itok=nhe1dpvk"/>
        </div>
        <div>
            ava+description
        </div>
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
}

export default Profile