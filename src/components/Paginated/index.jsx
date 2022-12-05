import React, { useState } from 'react'
import './Paginated.css'

export default function Paginated({ recipesPerPage, recipes, paginated, loading, currentPage }) {
  const [loader, setLoader] = useState(true)

  if (loading !== loader) setLoader(loading)

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
    pageNumbers.push(i)
  }

  function findPage(action) {
    if (currentPage !== 'undefined') {
      if (action === 'prev') {
        if (currentPage > 1) {
          paginated(currentPage - 1)
        }
      }
      if (action === 'next') {
        if (currentPage < pageNumbers.length) {
          paginated(currentPage + 1)
        }
      }
    }
  }

  if (loader) return ('')
  else {
    return (
      <nav className='paginated-links'>
        <h2>Pag:</h2>
        <ul id='paginated-list'>
          <li style={{ listStyle: 'none' }}>
            <button id={`button-nav-left`} onClick={() => findPage('prev')}>{'<'}</button>
          </li>
          {pageNumbers?.map(number => {
            if (number < currentPage + 2 && number > currentPage - 2) {
              return (
                <li style={{ listStyle: 'none' }} key={number}>
                  <button id={`button-nav-${number}`} onClick={() => paginated(number)}>{number}</button>
                </li>
              )
            } else {
              return ''
            }
          })}
          <li style={{ listStyle: 'none' }}>
            <button id={`button-nav-right`} onClick={() => findPage('next')}>{'>'}</button>
          </li>
        </ul>
      </nav>
    )
  }
}