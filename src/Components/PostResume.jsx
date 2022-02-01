import React from 'react'
import './post.css'

export const PostResume = ({ titulo, text, url, intro}) => {
    return (
        <div className="presentation">
            <h1 id="postTitle">{titulo}</h1>
            <h3 id="postIntro"><em>{intro}</em></h3>
            <img id="image" src={url} alt="lang.svg"></img>
            <p id="postText">{text}</p>
        </div>
    )
}

export default PostResume