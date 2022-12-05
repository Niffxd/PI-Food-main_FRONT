import React from 'react';

export default function OrderFilter({ handleOrderFilter }){
  return(
    <div className='order-filter'>
      <select id='select-order-by-letter' className='select-filter' onChange={handleOrderFilter}>
        <option value=''>Order By</option>
        <option value='a_to_z'>A - Z</option>
        <option value='z_to_a'>Z - A</option>
      </select>
    </div>
  )
}