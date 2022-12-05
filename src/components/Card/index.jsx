import React from 'react'
import './Card.css'

export default function Card({ name, image, diets }) {
  return(
    <div className='recipe-container'>
      <img className='recipe-img' src={image} alt="img-recipe"/>
      <div className="info-recipe-container">
        <h2>{name}</h2>
        {diets.map(diet => {
          return <p key={diet.name}> - {diet.name[0].toUpperCase() + diet.name.substring(1)}</p>
        })}
      </div>
    </div>
  )
}