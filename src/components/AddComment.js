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
            createdAt: moment().unix(),
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
            <div className="add-comment">
                <img className="add-comment__avatar" src="/images/cat-avatar.jpg" alt="Avatar" />
                <form className="add-comment__form" onSubmit={this.onSubmit}>
                    <input
                        className="add-comment__form--nick"
                        placeholder="Who dis?"
                        type="text"
                        onChange={this.onAuthorChange}
                        ref={this.textInput}
                    />
                    <div className="add-comment__form--right" >
                        <textarea
                            className="add-comment__form--comment"
                            placeholder="Leave your comment here..."
                            name="comment"
                            id=""
                            cols="30"
                            rows="10"
                            onChange={this.onTextChange}
                            ref={this.textarea}
                        />
                        <button className="add-comment__form--button" type="submit">Submit</button>


                    </div>
                </form>
            </div>
        )
    }
}

export default AddComment;