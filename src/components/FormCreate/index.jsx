import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/index'
import Navbar from '../NavBar'
import Banner from '../Banner'
import formatName from '../Additional Functions/formatName'
import selectImage from '../Additional Functions/selectImage'
import './Create.css'

export default function FormCreate() {
  const dispatch = useDispatch()
  const history = useHistory()
  const diets = useSelector(state => state.diets)

  const [ inputs, setInputs ] = useState({
    name: '',
    summary: '',
    health_score: '',
    steps: '',
    diets: []
  })

  useEffect(() => {
    dispatch(actions.getDiets())
  }, [dispatch])

  function handleChange(event, number = false, steps = false){
    if(number){
      if(event.target.value > 100){
        alert('Health score value must be between 0 and 100')
        event.target.value = ''
      }
      if(event.target.value < 0){
        alert('Health score value must be a positive number')
        event.target.value = ''
      }
      else{
        setInputs({
          ...inputs,
          [event.target.name] : event.target.value
        })
      }
    }
    else{
      if(!steps){
        if(event.target.value === ''){
          alert('Please complete the field')
        }
        setInputs({
          ...inputs,
          [event.target.name] : event.target.value
        })
      }else{
        setInputs({
          ...inputs,
          [event.target.name] : event.target.value
        })
      }
    }
  }

  function handleSelect(event){
    if(event.target.checked){
      setInputs({
        ...inputs,
        diets: [...inputs.diets, event.target.value]
      })
    }
    if(!event.target.checked) {
      setInputs({
        ...inputs,
        diets: inputs.diets.filter(diet => diet !== event.target.value)
      })
    }
  }

  function handleSubmit(event){
    event.preventDefault()
    if(inputs.name !== '' && inputs.summary !== ''){
      dispatch(actions.postRecipes(inputs))
      setInputs({
        name: '',
        summary: '',
        health_score: '',
        steps: '',
        diets: []
      })
      alert('Your recipe was created succesfully!')
      history.push('/home')
    }
    else{
      alert('Complete required fields!')
    }
  }

  return(
    <div className="diets-home-container">
      <div className="navbar-container">
        <Banner/>
        <Navbar/>
      </div>
      <div className="home-render">
        <div className="form-container">
          <div className='create-container'>
            <h1 className='title'>Create your own Recipe</h1>
            <form onSubmit={handleSubmit}>
              <div className="data-recipe-container">
                <div className="info-container">
                  <label htmlFor="">Recipe Name: *</label>
                  <input type="text" placeholder='Fries with Chicken ...' onChange={handleChange} value={inputs.name} name='name'/>
                  <label htmlFor="">Summary: *</label>
                  <input type="text" placeholder='It is a special because ...' onChange={handleChange} value={inputs.summary} name='summary'/>
                  <label htmlFor="">Health Score:</label>
                  <input
                    className='health-score-input'
                    type="number"
                    step="0.01"
                    placeholder='From 0 to 100'
                    onChange={event => handleChange(event, true)}
                    value={inputs.health_score}
                    name='health_score'
                    min={0}
                    max={100}/>
                  <label htmlFor="">Steps:</label>
                  <textarea className='steps-container' type="text" placeholder='First we start to ...' onChange={event => handleChange(event, false, true)} value={inputs.steps} name='steps'/>
                </div>
                <div className="diet-select-container">
                  <div className="diets-icons-select">
                    {
                      diets.map(diet => {
                        const name = formatName(diet.name)
                        return (
                          <div className="select-icons-diet" key={diet.name}>
                            <input
                              type="checkbox"
                              id={`${diet.id}`}
                              value={`${diet.name}`}
                              onChange={handleSelect}/>
                            <div className="container-data-diet">
                              <img
                                className='img-diet'
                                src={selectImage(diet.name)}
                                alt='no-img-diet'/>
                              <label htmlFor={`${diet.id}`}>{name}</label>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <input type="submit" className='send-form' value="Create your recipe !" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}