import posts from "../tests/fixtures/posts";

console.log(typeof posts);


export default (state = posts, action) => {
    switch (action.type) {
        case "ADD_POST":
            return [...state, action.post]
        default:
            return state;
    }
}