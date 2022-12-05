import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import DietsFilter from '../Additional Functions/dietsFilter'
import OrderFilter from '../Additional Functions/orderFilter'
import HealthScoreFilter from '../Additional Functions/healtScoreFilter'
import Paginated from '../Paginated'
import CardsContainer from '../CardsContainer'
import Banner from '../Banner'
import NavBar from '../NavBar'
import './Recipe.css'

export default function Recipe(){
  const dispatch = useDispatch()
  const recipes = useSelector((state) => state.recipes)
  const diets = useSelector((state) => state.diets)

  const [ order, setOrder ] = useState('') //eslint-disable-line no-unused-vars
  const [ currentPage, setCurrentPage ] = useState(1)

  const [ recipesPerPage, setRecipesPerPage ] = useState(9) //eslint-disable-line no-unused-vars
  const lastRecipe = currentPage * recipesPerPage
  const firstRecipe = lastRecipe - recipesPerPage
  const currentRecipe = Array.isArray(recipes)? recipes.slice(firstRecipe, lastRecipe) : recipes

  const loader = recipes.length !== 0 ? false : true

  useEffect(() => {
    dispatch(actions.getRecipes())
    dispatch(actions.getDiets())
}, [dispatch])

  function handleClick(){
    document.getElementById('select-order-by-letter').selectedIndex = 0;
    document.getElementById('select-order-by-health-score').selectedIndex = 0;
    dispatch(actions.getRecipes())
      .then(setCurrentPage(1))
  }

  function handleDietFilter(diet){
    if(!loader){
      dispatch(actions.dietsFilter(diet))
      setCurrentPage(1)
      setOrder(`Ordenado ${diet}`)
    }
  }

  function handleOrderFilter(event){
    if(!loader){
      if(event.target.value !== ''){
        dispatch(actions.orderFilter(event.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${event.target.value}`)
      }
    }
  }

  function handleOrderHealthScore(event){
    if(!loader){
      if(event.target.value !== ''){
        dispatch(actions.healthScoreFilter(event.target.value))
        setOrder(`Ordenado ${event.target.value}`)
      }
    }
  }

  function toggleActivePage(number) {
    document.getElementById(`button-nav-${(number - 1)}`)?.classList.remove('active-navigation')
    document.getElementById(`button-nav-${(number + 1)}`)?.classList.remove('active-navigation')
    document.getElementById(`button-nav-${number}`)?.classList.add('active-navigation')
  }

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber)
    toggleActivePage(pageNumber)
  }

  return(
    <div className="home-filters-container">
      <div className="navbar-container">
        <Banner/>
        <NavBar/>
      </div>
      <div className="home-render">
        <div className="filters-container">
          <div className="order-filter">
            <h3>Order: </h3>
            <OrderFilter handleOrderFilter={handleOrderFilter}/>
          </div>
          <DietsFilter handleDietFilter={handleDietFilter} diets={diets}/>
        </div>
        <div className="render-container">
          <div className='paginated-container'>
            <div className="button-select-container">
              <button className='reload-button' onClick={handleClick}>Reload Recipes</button>
              <HealthScoreFilter handleOrderHealthScore={handleOrderHealthScore}/>
            </div>
            <div className="paginated-controls">
              <Paginated
                recipesPerPage={recipesPerPage}
                recipes={recipes.length}
                paginated={paginated}
                loading={loader}
                currentPage={currentPage}
                />
            </div>
          </div>
          <CardsContainer recipes={currentRecipe}/>
        </div>
      </div>
    </div>
  )
}