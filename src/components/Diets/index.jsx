import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import Banner from '../Banner'
import Navbar from '../NavBar'
import selectImage from '../Additional Functions/selectImage'
import selectDietContent from '../Additional Functions/selectDietContent'
import formatName from '../Additional Functions/formatName'
import './Diets.css'

export default function Diets(){
  const dispatch = useDispatch()
  const diets = useSelector((state) => state.diets)

  useEffect(() => {
    dispatch(actions.getDiets())
  }, [dispatch])

  return(
    <div className="diets-home-container">
      <div className="navbar-container">
        <Banner/>
        <Navbar/>
      </div>
      <div className="home-render">
        <div className="diets-container">
          {diets.map(diet => {
            const name = formatName(diet.name)
            return (
              <div key={diet.id}
                onClick={() => document.getElementById(`detail-content-${diet.id}`).classList.toggle('show-info')}
                onMouseEnter={() => document.getElementById(`detail-content-${diet.id}`).classList.add('show-info')}
                onMouseLeave={() => document.getElementById(`detail-content-${diet.id}`).classList.remove('show-info')}
                className='diet-container'
                style={{ backgroundImage: `url(${selectImage(diet.name, true)})`}}>
                  <h3 className='title'>{name}</h3>
                  <p id={`detail-content-${diet.id}`} className='detail-content'>{selectDietContent(diet.name)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}