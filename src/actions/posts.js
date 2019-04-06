export const createPost = (post) => ({
    type: "CREATE_POST",
    post
})


export const editPost = (id, updates) => ({
    type: "EDIT_POST",
    id,
    updates
});

export const removePost = (id) => ({
    type: "REMOVE_POST",
    id
})

export const addComment = (id, comment) => ({
    type: "ADD_COMMENT",
    id,
    comment
});


export const addLike = (id, likes) => ({
    type: "ADD_LIKE",
    id,
    likes
})