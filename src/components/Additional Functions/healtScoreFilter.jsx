import React from 'react';

export default function healthScoreFilter({ handleOrderHealthScore }){
  return(
    <div className='health-score-filter'>
      <select id='select-order-by-health-score' className='select-filter' onChange={handleOrderHealthScore}>
        <option value=''>Health Score</option>
        <option value='asc'>To highest</option>
        <option value='desc'>To lowest</option>
      </select>
    </div>
  )
}