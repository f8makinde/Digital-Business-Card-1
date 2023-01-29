import React from 'react'
import pic from "./my portfolio pics.png";
import icon from "./Icon (1).png"
export default function Info(){
    return (
        <header>
            <img src={pic} alt='my-image'/>
            <h2>Faith Makinde(f8_makinde)</h2>
            <h3>Frontend Developer</h3>
            <div>
            <a href='#'><img src={icon} alt="" />Email</a>
            <a href='#'><i class="fa-brands fa-linkedin"></i>Linkedln</a>
            </div>
        </header>
    )
}