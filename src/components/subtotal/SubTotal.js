import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './subTotal.css'
import { useStateValue } from "../../StateProvider"
import { Link, useNavigate } from "react-router-dom";

function SubTotal() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();
    const getBasketTotal = () =>
        basket?.reduce((amount, item) => item.price + amount, 0)

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={(e) => navigate('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal