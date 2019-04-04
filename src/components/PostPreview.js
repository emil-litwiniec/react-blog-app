import React from "react";
import { Link } from "react-router-dom";


const PostPreview = ({ id, title, subtitle, createdAt, likes, image }) => {
    // console.log(props);
    return (
        <div>
            <img src={`/images/${image}`} alt="Post's image" />
            {/* <p>{image}</p> */}
            <div>
                <div>
                    {/* <p>Apr 3 20:15</p>
                    <p>Likes 544</p>
                </div>
                <h2>{props.id}: Post Title</h2>
                <p>Some text that is kind of subtitle</p> */}
                    <p>{createdAt}</p>
                    <p>Likes {likes}</p>
                </div>
                <h2>{id}: {title}</h2>
                <p>{subtitle}</p>
                <Link to={`/post/${id}`}>read more...</Link>
            </div>
        </div>
    )
};


export { PostPreview as default };