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
            createdAt: props.post ? props.post.createdAt : moment(new Date()).unix(),
            likes: props.post ? props.post.likes : 0,
            image: props.post ? props.post.image : "",
            comments: props.post ? props.post.comments : null,
            error: "",
            loadingPhase: 0
        };
    }

    componentDidMount() {
        this.state.image && this.downloadImage();
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        if (!this.state.title || !this.state.subtitle || !this.state.text || !this.state.image) {
            this.setState(() => ({
                error: "Please provide title, subtitle, text and an image."
            }));
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                // id: this.state.id,
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
        const uploadImage = () => storage.ref(`images/image_${this.state.image}`).put(file).then((snapshot) => this.downloadImage()).catch((e) => console.log(e));

        this.setState({
            loadingPhase: 1,
            image: uuid()
        }, uploadImage);
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
                <form className="post-form" onSubmit={this.onSubmit} >
                    {this.state.error && <p>{this.state.error}</p>}
                    <div className="post-form__group">
                        <label className="post-form__label post-form__label--title" htmlFor="title">Title: </label>
                        <textarea
                            className="post-form__input post-form__input--title"
                            name="title"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                        />
                    </div>

                    <div className="post-form__group">
                        <label className="post-form__label post-form__label--subtitle" htmlFor="subtitle">Subtitle:</label>
                        <textarea
                            className="post-form__input post-form__input--subtitle"
                            name="subtitle"

                            value={this.state.subtitle}
                            onChange={this.onSubtitleChange}
                        />
                    </div>
                    <div className="post-form__group">
                        <label className="post-form__label post-form__label--text" htmlFor="textContent">Text:</label>
                        <textarea
                            className="post-form__input post-form__input--text"
                            name="textContent"
                            placeholder="Your article goes here..."
                            value={this.state.text}
                            onChange={this.onTextChange}

                        />
                    </div>

                    <div className="post-form__group post-form__group--file">
                        <label className="post-form__label--file" htmlFor="chooseImage">Choose main picture
                        <input className="post-form__input--file" id="fileId" onChange={this.onFileChange} name="chooseImage" type="file" accept="image/png, image/jpeg" method="post" encType="multipart/form-data" />
                            <img className="post-form__label--file-icon" src="../images/folder-open.svg" alt="" />
                        </label>
                    </div>

                    <div className="post-form__group">
                        {[
                            null,
                            <p className="chosen-image">Loading image...</p>,
                            <img className="chosen-image chosen-image--ready" id="imageHolder" src="" alt="Image from firebase..." />
                        ][this.state.loadingPhase]
                        }
                    </div>
                    <div className="post-form__group--btn">
                        <button className=" post-form__btn post-form__btn--submit" type="submit" >Submit</button>
                        <button className="post-form__btn post-form__btn--abort" onClick={this.props.onAbort}>Abort</button>
                    </div>
                </form>

                {/* <button onClick={this.downloadImage}></button> */}
            </>
        )
    }
}




