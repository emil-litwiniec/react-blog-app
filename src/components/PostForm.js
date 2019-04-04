import React, { Component } from 'react';
import moment from "moment";
import uuid from "uuid/v1";


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
            error: ""
        };
    }

    onSubmit = (e) => {
        e.preventDefault();

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


    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
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
                    <input name="chooseImage" type="file" accept="image/png, image/jpeg" />
                    <button type="submit" >Submit</button>
                    <button onClick={this.props.onAbort}>Abort</button>
                </form>
            </>
        )
    }
}




