import React from "react";
import Search from '../../assets/images/search.png'
import './SearchBar.css'

export default function SearchBar({ handleInputChange, handleSubmit, search }){
  function handlePressEnter(event){
    if(event.key === 'Enter') handleSubmit(event)
  }

  return(
    <div className="searchbar-input">
      <input
        className='input-search'
        onChange={handleInputChange}
        onKeyDown={handlePressEnter}
        type="text"
        placeholder='Type an ingredient or recipe...'
        value={search}
      />
      <button
        className='button-search'
        onClick={handleSubmit}
        type="submit"
      ><img className='search-button-img' src={Search} alt="search-button" /></button>
    </div>
  )
}