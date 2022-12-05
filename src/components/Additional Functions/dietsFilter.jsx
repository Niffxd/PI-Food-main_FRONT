import React from 'react';
import selectImage from '../Additional Functions/selectImage'
import formatName from '../Additional Functions/formatName'

export default function DietsFilter({ handleDietFilter, diets }){
  return(
    <div className='section-diets'>
      {
        diets.map(diet => {
          const name = formatName(diet.name)
          return (
            <div className="icon-diet" key={diet.name} onClick={() => handleDietFilter(diet.name)}>
              <img src={selectImage(diet.name)} alt='no-img'/>
              <p>{name}</p>
            </div>
          )
        })
      }
    </div>
  )
}