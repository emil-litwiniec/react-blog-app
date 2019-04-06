import posts from "../tests/fixtures/posts";

console.log(typeof posts);


export default (state = posts, action) => {
    switch (action.type) {
        case "CREATE_POST":
            return [...state, action.post]
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
            return state.map((post) => {
                if (post.id === action.id) {
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
            })

        default:
            return state;
    }
}