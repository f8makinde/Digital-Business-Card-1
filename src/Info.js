import React from 'react'
import pic from "./my portfolio pics.png";
import icon from "./Icon (1).png"
export default function Info(){
    return (
        <header className='info--section'>
            <img src={pic} alt='my-image' className='info--img'/>
            <h2 className='info--name'>Faith Makinde(f8_makinde)</h2>
            <h3 className='info--title'>Frontend Developer</h3>
            <div className='info--flex'>
            <a href='#' className='btn--1'><img src={icon} alt="" />&nbsp; Email</a>
            <a href='#' className='btn--2'><i class="fa-brands fa-linkedin"></i>&nbsp; Linkedln</a>
            </div>
        </header>
    )
}