import React from "react";
import { connect } from "react-redux";

import { addComment } from '../actions/posts';



const Comment = ({ id, author, createdAt, text, postId }) => {
    return (
        <div>
            <img src="" alt="Avatar" />
            <div>
                <h4>{author}</h4>
                <p>{createdAt}</p>
                <p>{text}</p>
                <button onClick={() => console.log('id: ', id, "   postId: ", postId)}>Like</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (id, comment) => dispatch(addComment(id, comment))
})

// const mapStateToProps = (state) => ({
//     comment: 
// })


export default connect(undefined, mapDispatchToProps)(Comment);
