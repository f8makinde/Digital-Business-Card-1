import React from 'react'
 import twitterLogo from './Twitter Icon.png'
 import fbLogo from './Facebook Icon.png'
 import instaLogo from './Instagram Icon.png'
 import githubLogo from './GitHub Icon.png'
export default function Footer(){
    return(
        <div className='footer--section'>
            <img src={twitterLogo} alt="logo" />
            <img src={fbLogo} alt="logo" />
            <img src={instaLogo} alt="logo" />
            <img src={githubLogo} alt="logo" />
        </div>
    )
}