import React from 'react';
import './_comment.scss';
import moment from 'moment';

const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
            <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt='avatar' className="rounded-circle me-3" />
            <div className="comment__body">
                <p className="comment__header mb-1">Inder Sav • {moment('2020-01-09').fromNow()}</p>
                <p className="mb-0">Hala Madrid</p>
            </div>
        </div>
    )
}

export default Comment
