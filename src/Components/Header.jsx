import React from 'react'
import './post.css'

const Header = () => {
    
    return (
        <div>
            <form>  
                <a href="https://mymostpoeticsidebycm.netlify.app/">  
                    <input type="button" defaultValue="Go to 'My Most Poetic Side'" />
                </a>
                <a href="https://mymostpoeticsidebycm.netlify.app/aboutme">  
                    <input type="button" defaultValue="About Me" />
                </a>
            </form> 
{/* 
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="www.google.com" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                All the texts
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="./">"I would love to write the new fantastic saga... with my remains!"</a></li>
                </ul>
            </div>
              */}
            
            <hr />
            <h1 id="headerTitle">My Darkest Side</h1>
            <h2 id="headerSubtitle">Not everything about me is poetic...</h2>
            <hr />
        </div>
    )
}

export default Header
