import database from "../firebase/firebase";

export const createPost = (post) => ({
    type: "CREATE_POST",
    post
})

export const startCreatePost = (postData = {}) => {
    return (dispatch) => {
        const {
            title = "",
            subtitle = "",
            text = "",
            createdAt = 0,
            likes = 0,
            image = "",
            comments = []
        } = postData;

        const post = { title, subtitle, text, createdAt, likes, image, comments };

        return database
            .ref('posts')
            .push(post)
            .then(ref => {
                dispatch(createPost({
                    id: ref.key,
                    ...post
                }))
            })
    }
}


export const editPost = (id, updates) => ({
    type: "EDIT_POST",
    id,
    updates
});

export const removePost = (id) => ({
    type: "REMOVE_POST",
    id
})


export const setPosts = posts => ({
    type: 'SET_POSTS',
    posts
})


export const startSetPosts = () => {
    return (dispatch) => {

        return database
            .ref('posts')
            .orderByChild("createdAt")
            .once("value")
            .then(snapshot => {
                const posts = [];
                snapshot.forEach(childSnapshot => {
                    posts.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })
                return posts;
            })
            .then(posts => {
                posts.sort((a, b) => {
                    if
                        (b.createdAt > a.createdAt) {
                        return 1
                    }
                    if (b.createdAt < a.createdAt) {
                        return -1
                    }

                    return 0
                }
                );
                dispatch(setPosts(posts));
            }
            )
    }
}

export const addComment = (id, comment) => {
    console.log('addComment id:', id);
    console.log('addComment comment:', comment);
    return {
        type: "ADD_COMMENT",
        id,
        comment
    }
};

export const startAddComment = (id, commentData = { comments: [] }) => {
    return (dispatch) => {

        console.log("id: ", id, " commentData: ", commentData)
        const {
            comments
        } = commentData;

        const comment = {};

        return database
            .ref(`posts/${id}/comments`)
            .set(comments)
            .then(ref => {

                console.log('then id:', id);
                console.log('then comments:', comments);
                dispatch(addComment(
                    id,
                    {
                        comments: [...comments]
                    }
                ))
            })
    }
}


export const addLike = (id) => ({
    type: "ADD_LIKE",
    id
})

export const substractLike = (id) => ({
    type: "SUBSTRACT_LIKE",
    id
})

export const addCommentLike = (id, commentID) => ({
    type: "ADD_COMMENT_LIKE",
    id,
    commentID
})
export const substractCommentLike = (id, commentID) => ({
    type: "SUBSTRACT_COMMENT_LIKE",
    id,
    commentID
})