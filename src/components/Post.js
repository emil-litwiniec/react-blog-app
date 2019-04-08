import React, { Component } from "react";
import { connect } from "react-redux";
import { storage } from "../firebase/firebase";
import moment from 'moment';

import Likes from "./Likes";




class Post extends Component {

    componentDidMount() {


        this.downloadImage();
    }
    downloadImage = () => {
        // console.log(this.props.post);
        if (!(this.props.post.image === "")) {
            storage.ref(`images/image_${this.props.post.image}`).getDownloadURL().then((url) => {
                let img = document.getElementById('imageHolder');
                img.src = url;

            }).catch(e => console.log(e));
        }
    }
    render() {

        return (


            <div>
                <img id="imageHolder" onLoad={this.downloadImage} src="" alt="Firebase image test ..." />
                {/* {console.log(this.props.post.image)} */}
                <p>{moment(this.props.post.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                <h2>{this.props.post.title}</h2>
                <h4>{this.props.post.subtitle}</h4>
                <p>{this.props.post.text}</p>
                <Likes paramsId={this.props.post.id} />
            </div>
        )
    }
}
///.find((item) => item.id === props.paramsId)



const mapStateToProps = (state, props) => {
    console.log('props', props);
    return {
        post: state.posts.find((item) => item.id === props.paramsId)
    };
};

export default connect(mapStateToProps)(Post);