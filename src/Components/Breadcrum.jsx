import React from 'react';
import './Breadcrum.css';
import arrowIcon from './Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrowIcon} alt="Arrow Right" /> SHOP <img src={arrowIcon} alt="Arrow Right" /> {product.category} <img src={arrowIcon} alt="Arrow Right" /> {product.name}
    </div>
  )
}

export default Breadcrum