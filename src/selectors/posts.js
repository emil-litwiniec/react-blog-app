export default (posts, { text }) => {
    console.log('posts: ', posts);
    if (!posts) {
        return null
    } else {
        return posts
            .filter(post => {
                const textMatch = post.title
                    .toLowerCase()
                    .includes(text.toLowerCase());

                return textMatch;
            });
    }
};