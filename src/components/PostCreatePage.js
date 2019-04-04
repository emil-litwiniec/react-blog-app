import React, { Component } from 'react';
import { connect } from "react-redux";

import PostForm from "./PostForm";


class PostCreatePage extends Component {
    render() {
        return (
            <div>
                <h2>Create a post</h2>
                <button>Login</button>
                <PostForm />
            </div>
        )
    }
}



export default PostCreatePage;










