import React from 'react';

import PostPreview from "../components/PostPreview";



const PostPreviewList = () => {
    const dummyArray = [1, 2, 3];
    return (
        <div>
            <p>Something...</p>
            {dummyArray.map((item) => <PostPreview id={item} />)}
        </div>
    )
}

export { PostPreviewList as default };