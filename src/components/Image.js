import React, { useState, forwardRef, useRef, useImperativeHandle } from "react";
import { connect } from "react-redux";
import { storage } from "../firebase/firebase";


export default forwardRef((props, ref) => {


    const [loadingPhase, setLoadingPhase] = useState(0);

    useImperativeHandle(ref, () => ({
        onFileChange = () => {
            const file = document.getElementById('fileId').files[0];

            setLoadingPhase(1)


            // console.log(storageRef);
            storage.ref(`images/image_${this.state.image}`).put(file).then((snapshot) => this.downloadImage()).catch((e) => console.log(e));

        },

        downloadImage = () => {
            storage.ref(`images/image_${this.state.image}`).getDownloadURL().then((url) => {
                setLoadingPhase(2)
                let img = document.getElementById('imageHolder');
                img.src = url;

            }).catch(e => console.log(e));
        }

    }))

    //    const onFileChange = () => {
    //         const file = document.getElementById('fileId').files[0];

    //         setLoadingPhase(1)


    //         // console.log(storageRef);
    //         storage.ref(`images/image_${this.state.image}`).put(file).then((snapshot) => this.downloadImage()).catch((e) => console.log(e));

    //     }
    //     const downloadImage = () => {
    //         storage.ref(`images/image_${this.state.image}`).getDownloadURL().then((url) => {
    //             setLoadingPhase(2)
    //             let img = document.getElementById('imageHolder');
    //             img.src = url;

    //         }).catch(e => console.log(e));
    //     }

    return (
        <>
            {[
                null,
                <p>Loading image...</p>,
                <img id="imageHolder" src="" alt="Image from firebase..." />
            ][loadingPhase]
            }
        </>
    )
})