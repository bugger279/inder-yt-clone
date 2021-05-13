import React, { useEffect, useState } from 'react'
import './_comments.scss';
import numeral from 'numeral';
import Comment from '../comment/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action';

const Comments = ( {videoId, totalComments} ) => {
    const [text, setText] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCommentsOfVideoById(videoId));
    }, [dispatch,videoId]);

    const comments = useSelector(state => state.commentList.comments);
    const _comments = comments?.map(comment => comment.snippet.topLevelComment.snippet);

    const handleComment = (e) => {
        e.preventDefault();
        if(text.length <= 0) return;
        dispatch(addComment(videoId, text));
        setText(null);
    };

    return (
        <div className="comments">
            <p>{numeral(totalComments).format('0.a')} Comments</p>
            <div className="comments__form d-flex w-100 my-2">
                <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt='avatar' className="rounded-circle me-3" />
                <form onSubmit={handleComment} action="" className="d-flex flex-grow-1">
                    <input value={text} onChange={e => setText(e.target.value)} type="text" className="flex-grow-1" placeholder="Write a comment..." />
                    <button className="btn btn-border-0">Comment</button>
                </form>
            </div>
            <div className="comments__list">
                {
                    _comments?.map((comment, i) => (
                        <Comment key={i} comment={comment} />
                    ))
                }
            </div>
        </div>
    )
}

export default Comments
