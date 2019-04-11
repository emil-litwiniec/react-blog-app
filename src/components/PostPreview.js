import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRemovePost } from "../actions/posts";
import { storage } from "../firebase/firebase";
import moment from "moment";


const PostPreview = ({ id, title, subtitle, createdAt, likes, image, startRemovePost }) => {
    // console.log(props);

    const handleRemove = () => {
        startRemovePost(id);
    }
    useEffect(() => {
        downloadImage();
        console.log(image, "____", title);
    })

    const downloadImage = async () => {
        try {
            await storage.ref(`images/image_${image}`).getDownloadURL().then((url) => {
                const img = document.getElementById(`${id}`);
                img.src = url;

            }).catch(e => console.log(e));

        } catch (error) {
            console.log(error)
        }
    }
    const date = moment(createdAt * 1000).format();


    return (
        <div>
            {/* <img src={`/images/${image}`} alt="Post's image" /> */}
            {/* <p>{image}</p> */}
            <div>
                <div>
                    <p>chicken</p>
                    <p>{date}</p>
                    <p>Likes {likes}</p>
                    <img id={id} src="" alt="Firebase image test ..." />
                </div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <Link to={`/post/${id}`}>read more...</Link>
                <Link to={`/edit/${id}`}>edit post</Link>
                <button onClick={handleRemove}>Remove this post</button>

            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startRemovePost: id => dispatch(startRemovePost(id))
})




export default connect(undefined, mapDispatchToProps)(PostPreview);