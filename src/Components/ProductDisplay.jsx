import React, { useContext } from 'react';
import './ProductDisplay.css';
import starIcon from './Assets/star_icon.png';
import starDullIcon from './Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src={product.image} alt="Product Image 1" />
                <img src={product.image} alt="Product Image 2" />
                <img src={product.image} alt="Product Image 3" />
                <img src={product.image} alt="Product Image 4" />
            </div>
            <div className="productDisplay-img-main">
                <img src={product.image} alt="Main Image" />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-stars">
                <img src={starIcon} alt="Star Icon" />
                <img src={starIcon} alt="Star Icon" />
                <img src={starIcon} alt="Star Icon" />
                <img src={starIcon} alt="Star Icon" />
                <img src={starDullIcon} alt="Dull Star Icon" />
                <p>(122)</p>
            </div>
            <div className="productDisplay-prices">
                <div className="productDisplay-price-old">${product.old_price}</div>
                <div className="productDisplay-price-new">${product.new_price}</div>
            </div>
            <div className="productDisplay-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae delectus iusto similique nobis vitae. Dolorum ea eaque natus sit commodi aliquam nemo laudantium voluptas dicta. Perspiciatis excepturi incidunt nam magni esse distinctio harum doloribus beatae vero quidem eum, laboriosam quaerat, asperiores quia! Necessitatibus quos atque iusto fugit assumenda laborum.
            </div>
            <div className="productDisplay-sizes">
                <h3>Select Size</h3>
                <div className="productDisplay-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=> {addToCart(product.id)}}>ADD TO CART</button>
            <p className="productDisplay-category"><span>Category : </span>Women, T-Shirt, Crop Top</p>
            <p className="productDisplay-category"><span>Tags : </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay