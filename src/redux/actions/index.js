export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const CREATE_RECIPE = "CREATE_RECIPE"
export const FILTER_BY_DIET = "FILTER_BY_DIET"
export const FILTER_BY_NAME = "FILTER_BY_NAME"
export const FILTER_BY_HEALTH_SCORE = "FILTER_BY_HEALTH_SCORE"
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID"
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME"
export const GET_DIETS = "GET_DIETS"
export const POST_RECIPE = "POST_RECIPE"
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL"
export const CLEAN_STATE = "CLEAN_STATE"

const serverDeploy ='https://pi-food-mainback-production.up.railway.app'

export const postRecipes = (newRecipe) => async dispatch => {
  const response = await fetch(`${serverDeploy}/recipes`,
    { method: 'POST',
      body: JSON.stringify(newRecipe),
      headers:{
        'Content-Type': 'application/json'
      }
    }
  ).then(recipe => recipe.json())

  dispatch({
    type: POST_RECIPE,
    payload: response
  })
}

export const getRecipes = () => async dispatch => {
  const response = await fetch(`${serverDeploy}/recipes`)
  const recipes = await response.json()
  dispatch({
    type: GET_ALL_RECIPES,
    payload: recipes
  })
}

export const getRecipeDetail = (id) => async dispatch => {
  try{
    const response = await fetch(`${serverDeploy}/recipes/${id}`)
    const recipe = await response.json()
    dispatch({
      type: GET_RECIPE_DETAIL,
      payload: recipe
    })
  }
  catch(err){
    console.log(err)
  }
}

export const getRecipeById = (id) => async dispatch => {
  try{
    const response = await fetch(`${serverDeploy}/recipes/${id}`)
    const recipe = await response.json()
    dispatch({
      type: GET_RECIPE_BY_ID,
      payload: recipe
    })
  }
  catch(err){
    console.log(err)
  }
}

export const getRecipeByName = (name) => async dispatch => {
  try{
    const response = await fetch(`${serverDeploy}/recipes/?name=${name}`)
    const recipe = await response.json()
    dispatch({
      type: GET_RECIPE_BY_NAME,
      payload: recipe
    })
  }
  catch(err){
    
  }
}

export const getDiets = () => async dispatch => {
  const response = await fetch(`${serverDeploy}/diets`)
  const diets = await response.json()
  dispatch({
    type: GET_DIETS,
    payload: diets
  })
}

export const dietsFilter = (payload) => async dispatch => {
  dispatch({
    type: FILTER_BY_DIET,
    payload
  })
}

export const healthScoreFilter = (payload) => async dispatch => {
  dispatch({
    type: FILTER_BY_HEALTH_SCORE,
    payload
  })
}

export const orderFilter = (payload) => async dispatch => {
  dispatch({
    type: FILTER_BY_NAME,
    payload
  })
}

export const clean_state = (payload) => async dispatch => {
  dispatch({
    type: CLEAN_STATE,
    payload
  })
}