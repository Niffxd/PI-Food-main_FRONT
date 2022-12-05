import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'
import SearchBar from '../SearchBar'
import './NavBar.css'

export default function Navbar (){
  const dispatch = useDispatch()
  const [ search, setSearch ] = useState('')

  function handleInputChange (event){
    event.preventDefault()
    setSearch(event.target.value)
  }

  function handleSubmit (event){
    event.preventDefault()
    if(!isNaN(search)) dispatch(actions.getRecipeById(search))
    else dispatch(actions.getRecipeByName(search.toLowerCase()))
    setSearch('')
  }

  return(
    <div className='searchbar-container'>
      <SearchBar handleInputChange={handleInputChange} handleSubmit={handleSubmit} search={search}/>
      <div className="nav-links-container">
        <NavLink
          to="/home"
          className={isActive => "nav-link" + (isActive ? " selected" : "")}
          >Home
        </NavLink>
        <NavLink
          to="/diets"
          className={isActive => "nav-link" + (isActive ? " selected" : "")}
          >Diets
        </NavLink>
        <NavLink
          to="/recipes"
          className={isActive => "nav-link" + (isActive ? " selected" : "")}
          >Create Recipes
        </NavLink>
      </div>
    </div>
  )
}