
import { Link } from "react-router-dom"

function Item({ info }) {
    

    return (
        <>
          <div className="text-center mb-2 card text-black card-body bg-white">
          <div className="card-group">
         
            
           
                <img src={info.img} width='300px' height='300px' alt='imgitem' />
            
            <div className="card-header">  
            <h5 className="card-title"><p>{info.title}</p></h5> 
                 <p>Caracteristica </p>
                   <p>Modelo: {info.description}</p>
                   <p>Stock: {info.stock}</p>
                   <div className="card-body">
                        <h5 className="mb-2 text-muted card-subtitle"><p>Precio ${info.price} </p> </h5>
                   </div>
                <Link to={`/detalle/${info.id}`} className='producto'>
                   <button className="btn btn-primary">Ver Detalles</button>
                </Link>   
            </div>
            </div> 
            
        </div>  
        </>
    )
}

export default Item