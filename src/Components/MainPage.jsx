import React from 'react'
import {PostResume} from './PostResume.jsx'
import './post.css'

const MainPage = () => {

    const allPost = [post1, post2, post3, post4]; 

        return (
        <>
        {
            allPost.map(({allPost, id, titulo, text, url, intro}) => {
                return <PostResume 
                allPost = {allPost}
                key={id}
                titulo={titulo} 
                url={url} 
                text={text} 
                intro={intro}
                />
            } )
        }
        </>
    )
}

export default MainPage


const post1 = {
    "id": "post1",
    "titulo": "I would love to write the new fantastic saga... with my remains!",
    "text": "Well... I fancy write and I would love to bring life to something successfull, but in this case, what I mean is that I would like to be turned in pencils once I die. Yes, it turns out that you can make useful thing with a corpse if you leave aside your prejudices... Artist Nadine Jarvis has the amazing idea of using carbon from corpses someted to cremation to make pencils. 240 pencils can be done from a regular size dead body. Do the maths! Plenty of sagas could be written! Of course, they wouldn't be your 'brain child' but some contribution should be aknowlegded to you, big-hearted dead person! Do you find disturbing to give these pencils to yout family and friends as souvenirs in your funeral service? It's kind of funny farewell!",
    "url": "./post1.jpg",
    "intro": "Yes, it turns out that you can make useful thing with a corpse if you leave aside your prejudices...",
  };
  
  
  const post2 = {
    "id": "post2",
    "titulo": "My pandemic entertainment: reading autopsies files",
    "text": "Since I was a child I read books and I've been very fond of novel about crimes investigations. Unknowingly, I learnt a lot, and I guess that marked my adult life. During the social aisolation I decided to do a proper course in forensic science and I studied evisceration techniques, the manner of death, the signs of violence due to different agressions and wounds, how to discriminate between a murdering beheading or a suicidal one... My personal interest in the matter had gone beyond TV series and books, and finally I found myself enjoying the review of the autopsy file of famouse people, trying to make questions to the case, to figure it out what had happened... But to be honest, I felt crazy about knowing some details as how much weigthed somebody's liver, for instance.",
    "url": "./post2.jpg",
    "intro": "Novels about crimes wasn't enough. I needed to put in practise my knowlegde in forensic science.",
  };
  
  
  const post3 = {
    "id": "post3",
    "titulo": "A week in our fridge",
    "text": "When my guinea pig, Cobi, suddenly died, I couldn't cope with that. We found her in her cage, laying on one side, mouse open and paws stiffed. She had developed rigor mortis and hold her was like holding an estatue. Anyways, I kept her near my heart while I cried disconsolately for a while. We didn't have a garden to bury her, and I didn't want to ask family or friends for a piece of land for leaving this 'gift' there. So, I remembered a you tube video made by my favorite mortician (that means that I follow more than one, yes) about her cat's death. I definitely needed more time to process that lost, so, I provided me for time. I told my husband not to ask questions, I made a bed with my T-Shirt pijama in a bowl of ice-cream and put Cobi gentily there. Then to the fridge, until I felt ready for say Goodbye forever. Every single day, my husband and I would open the fridge to choose something to cook and would be reminded that our little girl was gone.",
    "url": "./post3.jpg",
    "intro": "With frozen pizza, meal and ice cream...",
  };
  
  const post4 = {
    "id": "post4",
    "titulo": "Composting our soul",
    "text": "With too much luck, we are going to be able to compost our body after death. We are the unique species that have cementeries. The entire world is one. It just happends that we use the land it in the wrong way. The movement for human composting is winning support in USA, and people have been already unearthed free of coffin and cloths, allowing the deeple touch with the organisms of the land. The idea is check different environment conditions and the outcome as the time goes by, to determinate the best wey to do it. Until now, the corpses were donated by the decease themselves and the whole protocole only approved as research, as a prototype. So, don't hurry to bury granma in your garden because you might be in serious troubles!",
    "url": "./post4.jpg",
    "intro": "Let's free the dead, make the ground healthier!",
  };
  
