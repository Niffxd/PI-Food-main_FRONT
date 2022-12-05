import gluten from '../../assets/images/diets/gluten free.png'
import dairy from '../../assets/images/diets/dairy free.png'
import vegetarian from '../../assets/images/diets/lacto ovo vegetarian.png'
import vegan from '../../assets/images/diets/vegan.png'
import paleo from '../../assets/images/diets/paleolithic.png'
import primal from '../../assets/images/diets/primal.png'
import whole30 from '../../assets/images/diets/whole 30.png'
import pescatarian from '../../assets/images/diets/pescatarian.png'
import ketogenic from '../../assets/images/diets/ketogenic.png'
import fodmap from '../../assets/images/diets/fodmap friendly.png'
import gluten_cover from '../../assets/images/diets_cover/glutenfree.png'
import dairy_cover from '../../assets/images/diets_cover/dairyfree.png'
import vegetarian_cover from '../../assets/images/diets_cover/lactoovovegetarian.png'
import vegan_cover from '../../assets/images/diets_cover/vegan.png'
import paleo_cover from '../../assets/images/diets_cover/paleolithic.png'
import primal_cover from '../../assets/images/diets_cover/primal.png'
import whole30_cover from '../../assets/images/diets_cover/whole30.png'
import pescatarian_cover from '../../assets/images/diets_cover/pescatarian.png'
import ketogenic_cover from '../../assets/images/diets_cover/ketogenic.png'
import fodmap_cover from '../../assets/images/diets_cover/fodmapfriendly.png'


export default function selectImage ( dietName, cover = false ) {
  if(!cover){
    switch(dietName){
      case 'gluten free':
      return gluten
      
      case 'dairy free':
      return dairy
    
      case 'lacto ovo vegetarian':
      return vegetarian
  
      case 'vegan':
      return vegan
      
      case 'paleolithic':
      return paleo
    
      case 'primal':
      return primal
  
      case 'whole 30':
      return whole30
      
      case 'pescatarian':
      return pescatarian
    
      case 'ketogenic':
      return ketogenic
  
      case 'fodmap friendly':
      return fodmap
  
      default:
      return ''
    }
  }
  else{
    switch(dietName){
      case 'gluten free':
      return gluten_cover
      
      case 'dairy free':
      return dairy_cover
    
      case 'lacto ovo vegetarian':
      return vegetarian_cover
  
      case 'vegan':
      return vegan_cover
      
      case 'paleolithic':
      return paleo_cover
    
      case 'primal':
      return primal_cover
  
      case 'whole 30':
      return whole30_cover
      
      case 'pescatarian':
      return pescatarian_cover
    
      case 'ketogenic':
      return ketogenic_cover
  
      case 'fodmap friendly':
      return fodmap_cover
  
      default:
      return ''
    }
  }
}