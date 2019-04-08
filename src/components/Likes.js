import React, { Component } from 'react';
import { connect } from "react-redux";

import { startAddLike, substractLike } from "../actions/posts";




class Likes extends Component {

    constructor(props) {
        super(props);
        // this.likes = this.props.props.likes;
        // this.id = this.props.props.id
        // this.likes = this.props.props.likes;
        this.state = {
            isLiked: false
        }
    }

    handleLike = () => {
        console.log(this.props.startAddLike)
        this.props.startAddLike(this.props.post.id, this.props.post.likes);
        this.setState({ isLiked: true });
    }
    handleUnlike = () => {
        this.props.substractLike(this.props.post.id);
        this.setState({ isLiked: false });
    }
    render() {
        return (


            <div>
                {console.log(this.props.post.likes)}
                <p>{this.props.post.likes}</p>
                {this.state.isLiked ?
                    <button onClick={this.handleUnlike} >Unlike</button>
                    :
                    <button onClick={this.handleLike} >I like it!</button>

                }
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    post: state.posts.find((item) => item.id === props.paramsId)
})

const mapDispatchToProps = (dispatch) => ({
    startAddLike: (id, currentLikes) => dispatch(startAddLike(id, currentLikes)),
    substractLike: (id) => dispatch(substractLike(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Likes);