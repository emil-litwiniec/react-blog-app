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
    })

    const downloadImage = async () => {
        try {
            await storage.ref(`images/image_${image}`).getDownloadURL().then((url) => {
                const img = document.getElementById(`${id}`);
                img.src = url;

            }).catch(e => console.info(e));

        } catch (error) {
            console.log(error)
        }
    }
    const date = moment(createdAt * 1000).format("MMM D, H:mm");


    return (


        <div className="private-post-preview">
            <img className="private-post-preview__image" id={id} src="" alt="Post image..." />
            <div className="private-post-preview__info">
                <div className="private-post-preview__info-date">

                    <div className="private-post-preview-info-wrapper">
                        <p className="text-post-preview-info private-text-post-preview__info">{date}</p>
                        <span className="text-post-preview-info private-text-post-preview__info"> | </span>

                        <div className="private-post-preview-info__likes">
                            <p className="text-post-preview-info private-text-post-preview__info"> {likes}</p>
                            <img className="private-heart-icon" src="./images/heart.svg" alt="Heart icon" />
                        </div>
                        <span className="text-post-preview-info private-text-post-preview__info"> | </span>
                    </div>

                    <div className="private-post-preview-links-wrapper"></div>
                    <Link className="private-post-preview__text-link" to={`/post/${id}`}>read full article</Link>
                    <Link className="private-post-preview__text-link" to={`/edit/${id}`}>edit</Link>
                    <a className="private-post-preview__text-link" onClick={handleRemove}>remove</a>

                </div>
                <h2 className="private-text-post-preview__title">{title}</h2>
                <p className="private-text-post-preview__subtitle">{subtitle}</p>

            </div>

        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startRemovePost: id => dispatch(startRemovePost(id))
})




export default connect(undefined, mapDispatchToProps)(PostPreview);