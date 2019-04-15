import React, { Component } from "react";
import { connect } from "react-redux";
import { storage } from "../firebase/firebase";
import moment from 'moment';

import { startSetPosts } from "../actions/posts";




import Likes from "./Likes";




class Post extends Component {
    componentDidMount() {
        // this.props.startSetPosts();
        // this.downloadImage();
    }
    downloadImage = () => {
        // console.log(this.props.post);
        // if (!(this.props.post.image === "")) {
        //     storage.ref(`images/image_${this.props.post.image}`).getDownloadURL().then((url) => {
        //         let img = document.getElementById('imageHolder');
        //         img.src = url;

        //     }).catch(e => console.log(e));
        // }
    }
    render() {
        const createdAt = this.props.post.createdAt;

        const date = moment(createdAt * 1000).format("MMM D, H:mm");
        console.log(this.props.post.text);

        const article = this.props.post.text;
        let articleParagraphs = article.split('\n');


        console.log('is it undeined at firts: ', this.props.post)

        // this.props.post && console.log('piesek śpiewa');

        return (

            <>



                <section className="post">
                    <p>chicken</p>

                    <div className="post__header">
                        <img className="post__header--img" id="imageHolder" onLoad={this.downloadImage} src="" alt="Firebase image test ..." />

                        <div className="post__header--titles">
                            <h2 className="post__header--title">{this.props.post.title}</h2>
                            <h4 className="post__header--subtitle">{this.props.post.subtitle}</h4>

                        </div>

                    </div>

                    <article className="post__article">

                        {articleParagraphs.map((paragraph, index) => <p className="post__article-node" key={index}>{paragraph}</p>)}

                    </article>

                    <div className="post__social">

                        <p>{date}</p>
                        <Likes paramsId={this.props.post.id} />

                    </div>
                </section>


            </>
        )
    }
}



const mapStateToProps = (state, props) => {
    console.log('props', props);
    return {
        post: state.posts.find((item) => item.id === props.paramsId)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startSetPosts: () => dispatch(startSetPosts())
});


export default connect(mapStateToProps, mapDispatchToProps)(Post);

