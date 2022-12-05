import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import Banner from '../Banner'
import Navbar from '../NavBar'
import './Detail.css'

export default function Detail(props){
  const dispatch = useDispatch()
  const myRecipe = useSelector(state => state.details)
  
  useEffect(() => {
    dispatch(actions.clean_state())
    dispatch(actions.getRecipeDetail(props.match.params.idRecipe))
  }, [dispatch, props.match.params.idRecipe])

  return(
    <div className='detail-component'>
      <div className="navbar-container">
        <Banner/>
        <Navbar/>
      </div>
      {
        myRecipe.length > 0 ? 
          <div className="home-render">
            <div className="recipe-details">
              <div className="recipe-info-container">
                <h1>{myRecipe[0].name}</h1>
                <div className="ingredients-summary">
                  <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ul className='list-ingredients'>
                      {Array.isArray(myRecipe[0].ingredients)
                        ? myRecipe[0].ingredients.map(ingredient => {
                          return <li key={ingredient.name}>{ingredient.name[0].toUpperCase() + ingredient.name.substring(1)}</li>
                        })
                        : <h3 style={{ margin: 'auto', textAlign: 'center' }}>We don't have ingredients for this recipe 😢</h3> 
                      }
                    </ul>
                  </div>
                  <div className="summary">
                    <h3>Summary</h3>
                    <p dangerouslySetInnerHTML={{ __html: myRecipe[0].summary}}></p>
                  </div>
                </div>
              </div>
              <div className="image-steps-healthscore-container">
                <div className="steps-container-description">
                  <h3>Method</h3>
                  <ul className='steps'>
                    {Array.isArray(myRecipe[0].steps)
                      ? myRecipe[0].steps.length > 0
                        ? myRecipe[0].steps.map(step => {
                            return <li key={step.number}>{step.step}</li>
                          })
                        : <h3 className='no-method'>We don't have methos for this recipe 😢</h3> 
                      : myRecipe[0].steps.length > 0
                        ? <p>{myRecipe[0].steps}</p>
                        : <h3 className='no-method'>We don't have methos for this recipe 😢</h3> 
                    }
                  </ul>
                </div>
                <div className="healt-score-diet-container">
                  <div className="healt-score-container">
                    <h3>Health Score</h3>
                    <p>{myRecipe[0].health_score} points</p>
                  </div>
                  <div className="diet-type-container">
                    <h3>Diets</h3>
                    {myRecipe[0].diets.map(diet => {
                      return <p key={diet.name}> - {diet.name[0].toUpperCase() + diet.name.substring(1)}</p>
                    })}
                  </div>
                </div>
                <div className="details-container" style={{ backgroundImage: `url(${myRecipe[0].img})`}}></div>
              </div>
            </div>
          </div>
         :
        <div>
            <p>Is not possible to render this recipe</p>
          </div>
      }
    </div>
  )
}