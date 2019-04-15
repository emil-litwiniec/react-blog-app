import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { startAddCommentLike, startSubstractCommentLike } from '../actions/posts';



const Comment = ({ id, author, createdAt, text, likes, postId, comments, startAddCommentLike, startSubstractCommentLike }) => {
    const [isLiked, setIsLiked] = useState(false);
    const commentIndex = comments.findIndex(comment => comment.id === id);
    const handleAddLike = () => {
        setIsLiked(true);
        startAddCommentLike(postId, comments[commentIndex], commentIndex);
    }
    const handleSubstractLike = () => {
        setIsLiked(false);
        startSubstractCommentLike(postId, comments[commentIndex], commentIndex);
    }
    const date = moment(createdAt * 1000).format("MMM D, H:mm");

    return (
        <div className="comment">
            <img className="comment__avatar" src="/images/cat-avatar.jpg" alt="Avatar" />
            <div className="comment__content">

                <div className="comment__content-info">

                    <h4 className="comment-info__author">{author}</h4>
                    <p className="comment-info__date">{date}</p>

                    <div className="comment-info__likes">

                        <p className="comment-info__likes-amount">{likes}</p>
                        {isLiked ?
                            <button onClick={handleSubstractLike} className="comment-info__button comment-info__button--unlike">
                                <img src="/images/heart.svg" alt="Heart icon" />
                            </button>
                            :
                            <button onClick={handleAddLike} className="comment-info__button comment-info__button--like" >
                                <img src="/images/heart.svg" alt="Heart icon" />
                            </button>
                        }

                    </div>

                </div>
                <p className="comment__text">{text}</p>

            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddCommentLike: (id, comment, commentIndex) => dispatch(startAddCommentLike(id, comment, commentIndex)),
    startSubstractCommentLike: (id, comment, commentIndex) => dispatch(startSubstractCommentLike(id, comment, commentIndex))
});

const mapStateToProps = (state, props) => ({
    comments: state.posts.find(post => post.id === props.postId).comments
})


export default connect(mapStateToProps, mapDispatchToProps)(Comment);
