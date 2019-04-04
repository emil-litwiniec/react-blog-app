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
        default:
            return state;
    }
}