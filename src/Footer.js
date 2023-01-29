import React from 'react'
 import twitterLogo from './Twitter Icon.png'
 import fbLogo from './Facebook Icon.png'
 import instaLogo from './Instagram Icon.png'
 import githubLogo from './GitHub Icon.png'
export default function Footer(){
    return(
        <div className='footer--section'>
            <a href='https://twitter.com/f8_makinde' target='_blank'><img src={twitterLogo} alt="logo" /></a>
            <a href=''><img src={fbLogo} alt="logo" /></a>
            <a href='https://www.instagram.com/f8_makinde/' target='_blank'> <img src={instaLogo} alt="logo" /></a>
            <a href='https://github.com/f8makinde' target='_blank'><img src={githubLogo} alt="logo" /></a>
            
        </div>
    )
}