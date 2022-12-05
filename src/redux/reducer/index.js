import * as actions from '../actions/index'

const initialState = {
  recipes: [],
  filteredRecipes: [],
  diets: [],
  details: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case actions.GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        filteredRecipes: action.payload
      }

    case actions.GET_RECIPE_DETAIL:
      return {
        ...state,
        details: action.payload
      }
    
    case actions.GET_DIETS:
      return {
        ...state,
        diets: action.payload
      }

    case actions.FILTER_BY_DIET:
      const recipes = state.filteredRecipes
      const filteredRecipes = action.payload === 'all'
        ?
          recipes
        :
          recipes.filter(recipe => recipe.diets.find(diet => diet.name === action.payload))

        const result = !filteredRecipes.length ? ['empty'] : filteredRecipes
      return {
        ...state,
        recipes: result
      }
    
    case actions.FILTER_BY_NAME:
      const sortedArr = action.payload === '' ?
        recipes : action.payload === 'a_to_z' ?
        state.recipes.sort(function(recipeA, recipeB) {
          if(recipeA.name > recipeB.name) return 1
          if(recipeB.name > recipeA.name) return -1
          return 0
        }) : action.payload === 'z_to_a' ?
        state.recipes.sort(function(recipeA, recipeB) {
          if(recipeA.name > recipeB.name) return -1
          if(recipeB.name > recipeA.name) return 1
          return 0
        }) : recipes
      return {
        ...state,
        recipes: sortedArr
      }

    case actions.FILTER_BY_HEALTH_SCORE:
      const healthScoreArr = action.payload === '' ?
        recipes : action.payload === 'asc' ?
        state.recipes.sort(function(recipeA, recipeB) {
          if(recipeA.health_score > recipeB.health_score) return -1
          if(recipeB.health_score > recipeA.health_score) return 1
          return 0
        }) : action.payload === 'desc' ?
        state.recipes.sort(function(recipeA, recipeB) {
          if(recipeA.health_score > recipeB.health_score) return 1
          if(recipeB.health_score > recipeA.health_score) return -1
          return 0
        }) : recipes
      return {
        ...state,
        recipes: healthScoreArr
      }
    
    case actions.GET_RECIPE_BY_ID:
    case actions.GET_RECIPE_BY_NAME:
      return {
        ...state,
        recipes: action.payload
      }

    case actions.CLEAN_STATE:
      return {
        ...state,
        details: []
      }
        
    case actions.POST_RECIPE:
    default:
      return {...state }
  }
}

export default rootReducer