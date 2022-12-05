import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Recipe from '../Recipe'
import FormCreate from '../FormCreate'
import Detail from '../Detail'
import Diets from '../Diets'
import './Home.css'

export default function Home(){
  return (
    <BrowserRouter>
      <div className="home-container">
        <Switch>
          <Route exact path='/home' component={Recipe}/>
          <Route exact path='/recipes' component={FormCreate}/>
          <Route exact path='/recipes/:idRecipe' component={Detail}/>
          <Route exact path='/diets' component={Diets}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
