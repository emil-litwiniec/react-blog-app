import React, { Component } from 'react';
import moment from "moment";
import uuid from "uuid/v1";


export default class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            title: "",
            subtitle: "",
            text: "",
            createdAt: moment().format(),
            likes: 0,
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
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />

                <label htmlFor="subtitle">Subtitle:</label>
                <input
                    name="subtitle"
                    type="text"
                    value={this.state.subtitle}
                    onChange={this.onSubtitleChange}
                />

                <label htmlFor="textContent">Text:</label>
                <textarea
                    name="textContent"
                    placeholder="Your article goes here..."
                    val={this.state.text}
                    onChange={this.onTextChange}

                />

                <label htmlFor="chooseImage">Choose main picture:</label>
                <input name="chooseImage" type="file" accept="image/png, image/jpeg" />
                <button >Abort</button>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}




