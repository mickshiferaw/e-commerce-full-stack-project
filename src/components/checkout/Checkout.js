import React from 'react'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct'
import SubTotal from '../subtotal/SubTotal'
import './Checkout.css'
import { useStateValue } from "../../StateProvider"
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className='checkout_ad'
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <h3>Hello, {user ? user.email : 'user'}</h3>
                <h2 className='checkout_title'>Your shopping Basket</h2>
                {basket.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}

                {/* ?.email */}
            </div>
            <div className="right_side">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout