export const createPost = (post) => ({
    type: "CREATE_POST",
    post
})


export const editPost = (id, updates) => ({
    type: "EDIT_POST",
    id,
    updates
});