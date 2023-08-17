import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../Firebase/Firebase";
import { useCartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [comprador, setComprador] = useState({});
    const [orderId, setOrderID] = useState("");
    const [mensaje, setMensaje] = useState(false);
    const [loader, setLoader] = useState(false);
    const { cart, totalPrice, clearCart } = useCartContext();
    const navigate = useNavigate();

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value,
        });
    };
    const finalizarCompra = (e) => {
        e.preventDefault();
        if (Object.values(comprador).length !== 3) {
            setMensaje(true);
        } else {
            setMensaje(false);
            setLoader(true);
            const ventas = collection(db, "orders");
            addDoc(ventas, {
                comprador,
                items: cart,
                total: totalPrice(),
                date: serverTimestamp(),
            })
                .then((res) => {
                    setOrderID(res.id);
                    clearCart();
                })
                .catch((error) => console.log(error))
                .finally(() => setLoader(false));
        }
    };
    if (loader) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {!orderId ? (
                <div>
                    <h2>Checkout</h2>
                    <h4>Por favor complete</h4>
                    <form
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                        onSubmit={finalizarCompra}>
                        <input
                            type='text'
                            placeholder='Nombre y Apellido'
                            name='name'
                            onChange={datosComprador}
                        />
                        <input
                            type='number'
                            placeholder='351-1111111'
                            name='phone'
                            onChange={datosComprador}
                        />
                        <input
                            type='email'
                            placeholder='xxx@mail.com'
                            name='email'
                            onChange={datosComprador}
                        />
                        <button type='submit'>Finalizar Compra</button>
                        {mensaje && (
                            <p style={{ color: "red" }}>
                                Por favor complete todos los campos
                            </p>
                        )}
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Muchas gracias por su compra!</h2>
                    <h4>Su orden es: {orderId}</h4>
                    <button onClick={() => navigate("/")}>Volver</button>
                </div>
            )}
        </div>
    );
};

export default Checkout;