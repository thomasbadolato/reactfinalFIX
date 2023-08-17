import { useContext } from "react";
import { CartContext } from "./CartContext";

const ButtonAddCart = ( {id, img} ) => {
    
    let {addProduct } = useContext(CartContext)

    const handlerClick = () => { 
        addProduct(id)
    }
    
    return(
        <button id="addCart" onClick={handlerClick}>
            <img src={img} alt="add"></img>
        </button>
    )
}

export default ButtonAddCart;