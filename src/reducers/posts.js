// import posts from "../tests/fixtures/posts";

// console.log(typeof posts);


export default (state = [], action) => {
    switch (action.type) {
        case "CREATE_POST":
            return [action.post, ...state,]
        case "EDIT_POST":
            return state.map(post => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        ...action.updates
                    }
                } else {
                    return post
                }
            })
        case "REMOVE_POST":
            console.log(action.id);
            return state.filter(({ id }) => id !== action.id);
        case "ADD_COMMENT":
            // console.log("ADD COMMENT triggered")
            return state.map((post) => {
                console.log("reducers POST ID:", post.id)
                console.log("reducers ACTION ID:", action.id)
                if (post.id === action.id) {
                    console.log('Should work....')
                    return {
                        ...post,
                        ...action.comment
                    }
                } else {
                    return post
                }
            })
        case "ADD_LIKE":
            return state.map((post) => {
                if (post.id === action.id) {
                    // const addLike = post.likes + 1;
                    return {
                        ...post,
                        likes: post.likes + 1
                    }
                } else {
                    return post
                }
            });
        case "SUBSTRACT_LIKE":
            return state.map((post) => {
                if (post.id === action.id && post.likes > 0) {
                    // const addLike = post.likes + 1;
                    return {
                        ...post,
                        likes: post.likes - 1
                    }
                } else {
                    return post
                }
            });

        case "ADD_COMMENT_LIKE":
            return state.map(post => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        comments:
                            post.comments.map((comment) => {
                                if (comment.id === action.commentID) {
                                    return {
                                        ...comment,
                                        likes: comment.likes + 1
                                    }
                                } else {
                                    return comment
                                }
                            })
                    }
                } else {
                    return post
                }
            })
        case "SUBSTRACT_COMMENT_LIKE":
            // let { commentID, id } = action;
            return state.map(post => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        comments:
                            post.comments.map((comment) => {
                                if (comment.id === action.commentID && comment.likes > 0) {
                                    return {
                                        ...comment,
                                        likes: comment.likes - 1
                                    }
                                } else {
                                    return comment
                                }
                            })
                    }
                } else {
                    return post
                }
            })
        case "SET_POSTS":
            return action.posts;

        default:
            return state;
    }
}