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
    const date = moment(createdAt * 1000).format();


    return (
        <div className="post-preview">
            <img className="post-preview__image" id={id} src="" alt="Post image..." />
            <div className="post-preview__info">

                <p>{date}</p>
                <p>Likes {likes}</p>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <Link to={`/post/${id}`}>read more...</Link>
            </div>

        </div>
    )
};





export default PublicPostPreview;