import React, { Component } from 'react';
import { connect } from "react-redux";

import { startAddLike, startSubstractLike } from "../actions/posts";




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
        this.props.startSubstractLike(this.props.post.id, this.props.post.likes);
        this.setState({ isLiked: false });
    }
    render() {
        return (


            <div className="likes">
                {this.state.isLiked ?
                    <button className="likes__button likes__button--unlike" onClick={this.handleUnlike}><img src="/images/heart.svg" alt="Heart icon" /></button>
                    :
                    <button className="likes__button likes__button--like" onClick={this.handleLike} ><img src="/images/heart.svg" alt="Heart icon" /></button>

                }
                <p className="likes__amount">{this.props.post.likes}</p>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    post: state.posts.find((item) => item.id === props.paramsId)
})

const mapDispatchToProps = (dispatch) => ({
    startAddLike: (id, currentLikes) => dispatch(startAddLike(id, currentLikes)),
    startSubstractLike: (id, currentLikes) => dispatch(startSubstractLike(id, currentLikes))
})


export default connect(mapStateToProps, mapDispatchToProps)(Likes);