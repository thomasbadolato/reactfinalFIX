import { useState, useEffect } from 'react';
import { db } from '../Firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';


function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Items"));
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setProducts(docs)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [products]);


    return (
        <div className='container card'>
            <div className='card-body'>
                {products.map(p => (
                    <div key={p.id}>
                        <p>Title:{p.title}</p>
                        <p>Description:{p.description}</p>
                        <p>Price:$ {p.price}</p>
                        <p>Stock:{p.stock}</p>
                        <p>categoryId:{p.categoryId}</p>
                        <img src={p.img} width='400px' height='400px' alt='img' />
                        <br></br>
                        <button className='btn btn-danger'>Quitar</button>
                        <button className='btn btn-success m-1'>Agregar</button>
                        <hr></hr>

                    </div>


                ))
                }

            </div>
        </div>
    )
}

export default Products;