import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Card from '../Card'
import Loader from './Loader'
import './CardsContainer.css'

export default function CardsContainer({ recipes }){
  const [ render, setRender ] = useState(<Loader/>)

  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(`No Recipes found 😢`);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if(!recipes.length) {
    return <h1>{render}</h1>
  }
  else{
    return (
      <div className="cards-container">
        {
          recipes[0] !== ('empty')
          ? recipes?.map(recipe => {
              return (
                <div
                  className={'card'}
                  key={recipe.id}>
                  <Link to={'/recipes/' + recipe.id}>
                    <Card
                      key={recipe.id}
                      name={recipe.name}
                      image={recipe.img}
                      diets={recipe.diets}
                    />
                  </Link>
                </div>
              )
            })
          :
          <h1>There are no recipes with that diet 😢</h1>
        }
      </div>
    )
  }
}

