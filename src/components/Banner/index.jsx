import React from "react";
import { Link } from "react-router-dom";
import './Banner.css'

import Logo from '../../assets/images/logo.png'

export default function Banner() {
  return (
    <div className='banner-container'>
      <img className='logo-image-banner' src={Logo} alt='logo-banner-img' />
      <Link to='/home'>
        <h1>Welcome to Recipes !</h1>
      </Link>
    </div>
  )
}