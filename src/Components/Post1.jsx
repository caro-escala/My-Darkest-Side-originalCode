import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PostComplete from './PostComplete'

const Post1 = () => {
    return (
        <div>
            <Header />
            
            {
            Post1.map(({id, titulo, text, url, intro}) => {
                console.log(url)
                return <PostComplete 
                key={id}
                titulo={titulo} 
                url={url} 
                text={text} 
                intro={intro}/>
            } )
        }

            <Footer />
        </div>
    )
}

const Post1 = {
    "id": "post1",
    "titulo": "If my remains write the new Harry Potter's saga",
    "text": "It turns out that you can make useful thing with a corpse if you leave aside your prejudices",
    "url": "./mds_post1.jpg",
    "intro": "I would like pencils were made with my inorganic remains",
};
