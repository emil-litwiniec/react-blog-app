import React, { Component } from "react";
import { connect } from "react-redux";

// class Post extends Component {

//     render() {
//         <div>
//             {this.props}
//             {/* <h2>{this.props.post.title}</h2>
//             <h4>{this.props.post.subtitle}</h4>
//             <p>{this.props.post.text}</p> */}
//         </div>
//     }
// }


const Post = (props) => {
    // console.log("post: ", props.post)
    const post = props.post;
    return (
        <div>
            <h2>{post.title}</h2>
            <h4>{post.subtitle}</h4>
            <p>{post.text}</p>
        </div>
    )
}


const mapStateToProps = (state, props) => {
    // console.log(typeof props.paramsId);
    return {
        post: state.posts.find((item) => item.id === props.paramsId)
    };
};

export default connect(mapStateToProps)(Post);