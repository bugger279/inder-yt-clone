import React from 'react'
import './_comments.scss';
import numeral from 'numeral';
import Comment from '../comment/Comment';

// {numeral(1000).format('0.a')}

const Comments = () => {
    const handleComment = (comment) => {

    }
    return (
        <div className="comments">
            <p>{numeral(1999).format('0.a')} Comments</p>
            <div className="comments__form d-flex w-100 my-2">
                <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt='avatar' className="rounded-circle mr-3" />
                <form onSubmit={handleComment} action="" className="d-flex flex-grow-1">
                    <input type="text" className="flex-grow-1" placeholder="Write a comment..." />
                    <button className="btn btn-border-0">Comment</button>
                </form>
            </div>
            <div className="comments__list">
                {
                    [...Array(15)].map((data, i) => (
                        <Comment />
                    ))
                }
            </div>
        </div>
    )
}

export default Comments
