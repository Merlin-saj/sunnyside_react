import React from 'react'
import  "./header.css"
import humburger from "./icon-hamburger.svg"
export default function Header(props) {
    return (
        <div className='header'>
            <div className='nav'>
                <ul>
                <li class='sunny'><a href='#sunnyside'>sunnyside</a></li>
                </ul>

                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact' className='button'>Contact Us</a></li>
                </ul>

                <img onClick={()=>{
                    props.click();
                }} src={humburger} alt='humburger' className='humb'/>
            </div>

            <h1>WE ARE CREATIVES</h1>
        </div>
    )
}
