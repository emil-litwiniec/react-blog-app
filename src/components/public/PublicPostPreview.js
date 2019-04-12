import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../firebase/firebase";
import moment from "moment";


const PublicPostPreview = ({ id, title, subtitle, createdAt, likes, image }) => {


    useEffect(() => {
        downloadImage();
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
    const date = moment(createdAt * 1000).format("MMM D, H:mm");


    return (
        <div className="post-preview">
            <img className="post-preview__image" id={id} src="" alt="Post image..." />
            <div className="post-preview__info">
                <div className="post-preview__info-date">
                    <p className="text-post-preview-info">{date}</p>
                    <p className="text-post-preview-info">Likes {likes}</p>

                </div>
                <h2 className="text-post-preview-title">{title}</h2>
                <p className="text-post-preview-subtitle">{subtitle}</p>
                <Link className="text-post-preview-readmore" to={`/post/${id}`}>read more...</Link>
            </div>

        </div>
    )
};





export default PublicPostPreview;