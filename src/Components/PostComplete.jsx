import React from 'react'

const PostComplete = ({titulo, text, url, intro}) => {
    
    return (
        <div className="presentation">
            <h1>{titulo}</h1>
            <h3>{intro}</h3>
            <img className="image" src={url} alt="lang.svg"></img>
            <p>{text}</p>
        </div>
        )
    }
    
export default PostComplete
