import React, { Component } from "react";
import uuid from "uuid/v1";
import moment from "moment";



class AddComment extends Component {

    constructor(props) {
        super(props);

        this.textInput = React.createRef();
        this.textarea = React.createRef();

        this.state = {
            id: undefined,
            author: "",
            createdAt: undefined,
            text: "",
            likes: 0
        }
    }
    onSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            id: uuid(),
            author: this.state.author,
            createdAt: moment().format(),
            text: this.state.text,
            likes: this.state.likes
        })


        // console.log(this.textInputs)
        this.setState({
            id: uuid(),
            author: '',
            text: "",
            likes: 0
        })
        this.textInput.current.value = '';
        this.textarea.current.value = '';


    }

    onAuthorChange = (e) => {
        this.setState({
            author: e.target.value
        })
    }

    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }


    render() {
        return (
            <div>
                <img src="" alt="'Avatar'" />
                <form onSubmit={this.onSubmit}>
                    <input
                        placeholder="Who dis?"
                        type="text"
                        onChange={this.onAuthorChange}
                        ref={this.textInput}
                    />
                    <textarea
                        placeholder="Leave your comment here..."
                        name="comment"
                        id=""
                        cols="30"
                        rows="10"
                        onChange={this.onTextChange}
                        ref={this.textarea}
                    />
                    <button type="submit">Comment</button>
                </form>
            </div>
        )
    }
}

export default AddComment;