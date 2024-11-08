import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../Context/ShopContext';
import removeIcon from './Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_products, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
    if(!all_products) {
        return <p>Errorrrrrrr......</p>
    }
    return (
        <div className='cartItems'>
            <div className="cartItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartItems-format cartItems-format-main">
                            <img src={e.image} className='carticon-product-icon' alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img src={removeIcon} className='cartItems-remove-icon' onClick={() => { removeFromCart(e.id) }} alt="Remove Icon" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartItems-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>Apply Code</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems