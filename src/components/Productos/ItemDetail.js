import { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Carrito/CartContext'

function ItemDetail({ data }) {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className='container'>
            <div className='detail'>
                <img className='detail_image' src={data.img} alt='' />
                <div className='content'>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <p>${data.price} </p>

                    {goToCart ? <Link to='/cart'>Terminar compra</Link> : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />}

                </div>
            </div>
        </div>
    )
}

export default ItemDetail