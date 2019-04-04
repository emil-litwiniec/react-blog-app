import React from "react";
import { Link } from "react-router-dom";


const PostPreview = (props) => {
    return (
        <div>
            <img src="" alt="Post's image" />
            <div>
                <div>
                    <p>Apr 3 20:15</p>
                    <p>Likes 544</p>
                </div>
                <h2>{props.id}: Post Title</h2>
                <p>Some text that is kind of subtitle</p>
                <Link to="/post/:id">read more...</Link>
            </div>
        </div>
    )
};


export { PostPreview as default };