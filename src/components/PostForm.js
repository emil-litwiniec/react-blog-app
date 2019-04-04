import React from 'react';

const PostForm = () => {
    return (
        <form action="">
            <p>Title:</p>
            <input type="text" />
            <p>Subtitle:</p>
            <input type="text" />
            <p>Article:</p>
            <textarea name="text" id="" cols="30" rows="10"></textarea>
            <button >Abort</button>
            <button type="submit">Submit</button>
        </form>
    )
}




export { PostForm as default };