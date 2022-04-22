import React from 'react';
import "./footer.css"
import fb from "./icon-facebook.svg"
import inst from "./icon-instagram.svg"
import pint from "./icon-pinterest.svg"
import twit from "./icon-twitter.svg"
export default function Footer() {
  return <div className='footer' id='contact'>

      <ul>
          <li><a href="#/">sunnyside</a></li>
          <li><a href="#/">About</a></li>
          <li><a href="#/">Services</a></li>
          <li><a href="#/">Projects</a></li>
      </ul>
      
      <ul>
          <li><a href='#/'> <img src={fb} alt='img'/> </a></li>
          <li><a href='#/'> <img src={inst} alt='img'/> </a></li>
          <li><a href='#/'> <img src={pint} alt='img'/> </a></li>
          <li><a href='#/'> <img src={twit} alt='img'/> </a></li>
      </ul>

      
  </div>;
}
