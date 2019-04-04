import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removePost } from "../actions/posts";


const PostPreview = ({ id, title, subtitle, createdAt, likes, image, removePost }) => {
    // console.log(props);
    const handleRemove = () => {
        removePost(id);
    }

    // console.log('hahaha : ', id)
    return (
        <div>
            <img src={`/images/${image}`} alt="Post's image" />
            {/* <p>{image}</p> */}
            <div>
                <div>
                    {/* <p>Apr 3 20:15</p>
                    <p>Likes 544</p
                </div>
                <h2>{props.id}: Post Title</h2>
                <p>Some text that is kind of subtitle</p> */}
                    <p>{createdAt}</p>
                    <p>Likes {likes}</p>
                </div>
                <h2>{id}: {title}</h2>
                <p>{subtitle}</p>
                <Link to={`/post/${id}`}>read more...</Link>
                <Link to={`/edit/${id}`}>edit post</Link>
                <button onClick={handleRemove}>Remove this post</button>

            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    removePost: id => dispatch(removePost(id))
})




export default connect(undefined, mapDispatchToProps)(PostPreview);