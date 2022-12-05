import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing'
import Home from './components/Home'
import FormCrate from './components/FormCreate'
import Detail from './components/Detail'
import Diets from './components/Diets'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/recipes' component={FormCrate}/>
          <Route exact path='/recipes/:idRecipe' component={Detail}/>
          <Route exact path='/diets' component={Diets}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
