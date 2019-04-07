import React, { Component } from 'react';
import moment from "moment";
import uuid from "uuid/v1";

import { storage } from "../firebase/firebase";


export default class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.post ? props.post.id : uuid(),
            title: props.post ? props.post.title : "",
            subtitle: props.post ? props.post.subtitle : "",
            text: props.post ? props.post.text : "",
            createdAt: props.post ? props.post.createdAt : moment().format(),
            likes: props.post ? props.post.likes : 0,
            image: props.post ? props.post.image : uuid(),
            comments: [],
            error: "",
            loadingPhase: 0
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        if (!this.state.title || !this.state.subtitle || !this.state.text) {
            this.setState(() => ({
                error: "Please provide title, subtitle and text."
            }));
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                id: this.state.id,
                title: this.state.title,
                subtitle: this.state.subtitle,
                text: this.state.text,
                createdAt: this.state.createdAt,
                likes: this.state.likes,
                image: this.state.image,
                comments: this.state.comments
            });

        }

    };
    onTextChange = (e) => {
        const text = e.target.value;
        this.setState(() => ({ text }));
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }
    onSubtitleChange = (e) => {
        const subtitle = e.target.value;
        this.setState(() => ({ subtitle }));
    }
    onFileChange = () => {
        const file = document.getElementById('fileId').files[0];

        this.setState({
            loadingPhase: 1
        });


        // console.log(storageRef);
        storage.ref(`images/image_${this.state.image}`).put(file).then((snapshot) => this.downloadImage()).catch((e) => console.log(e));

    }
    downloadImage = () => {
        storage.ref(`images/image_${this.state.image}`).getDownloadURL().then((url) => {
            this.setState({
                loadingPhase: 2
            });
            let img = document.getElementById('imageHolder');
            img.src = url;

        }).catch(e => console.log(e));
    }




    render() {

        return (
            <>
                <form onSubmit={this.onSubmit} >
                    {this.state.error && <p>{this.state.error}</p>}
                    <label htmlFor="title">Title: </label>
                    <textarea
                        name="title"
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />

                    <label htmlFor="subtitle">Subtitle:</label>
                    <textarea
                        name="subtitle"

                        value={this.state.subtitle}
                        onChange={this.onSubtitleChange}
                    />

                    <label htmlFor="textContent">Text:</label>
                    <textarea
                        name="textContent"
                        placeholder="Your article goes here..."
                        value={this.state.text}
                        onChange={this.onTextChange}

                    />

                    <label htmlFor="chooseImage">Choose main picture:</label>
                    <input id="fileId" onChange={this.onFileChange} name="chooseImage" type="file" accept="image/png, image/jpeg" method="post" encType="multipart/form-data" />
                    <button type="submit" >Submit</button>
                    <button onClick={this.props.onAbort}>Abort</button>
                </form>

                {/* <button onClick={this.downloadImage}></button> */}
                {[
                    null,
                    <p>Loading image...</p>,
                    <img id="imageHolder" src="" alt="Image from firebase..." />
                ][this.state.loadingPhase]
                }
            </>
        )
    }
}




