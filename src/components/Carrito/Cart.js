import React from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart, totalPrice } = useCartContext();
    const navigate = useNavigate();

     if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compra</Link>
            </>
        );
    }

    return (
        <>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}
            <p> total:$ {totalPrice()} </p>
            
            <button
                className='btn btn-success'
                onClick={() => navigate("/checkout")}>
                Generar orden de compra
            </button>
        </>
    );
}

export default Cart;