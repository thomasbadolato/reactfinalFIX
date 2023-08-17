import React from 'react'
import { useCartContext } from '../Carrito/CartContext'


function CartWidget() {
    const { totalProducts } = useCartContext();

    return (
        <>
            <i className="bi bi-cart-check"></i>
            <span>{totalProducts() || ''} </span>
        </>
    );
}

export default CartWidget;