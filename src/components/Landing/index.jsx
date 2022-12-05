import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing(){
  return (
    <div className='landing-container'>
      <div className='login-container'>
        <h1>Welcome to Recipes!</h1>
        <Link to='/home'>
          <div className="button-container">
            <button className='go-button'>Let's cook !</button>
          </div>
        </Link>
      </div>
    </div>
  )
}