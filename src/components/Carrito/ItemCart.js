import React from 'react';
import { useCartContext } from './CartContext';

function ItemCart({ product }) {
    const { cart, removeProduct } = useCartContext();

    // Buscar el producto en el carrito
    const cartProduct = cart.find(item => item.id === product.id);

    if (!cartProduct) {
        return null; // El producto no está en el carrito, no mostrarlo
    }

    const subtotal = cartProduct.quantity * product.price;

    return (
        <div className='itemcart'>
            <img src={product.img} alt={product.title} />
            <div>
                <p>Producto: {product.title} </p>
                <p>Stock: {product.stock} </p>
                <p>Precio Unitario: ${product.price} </p>
                <p>Cantidad: {cartProduct.quantity}</p>
                <p>Subtotal: $ {subtotal} </p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    );
}

export default ItemCart;
