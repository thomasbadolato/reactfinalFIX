import ItemListContainer from './components/Productos/ItemListContainer';
import './App.css';
import Error from './components/Productos/Error';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Carrito/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Productos/ItemDetailContainer';
import CartProvider from './components/Carrito/CartContext';
import Checkout from './components/Carrito/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/:categoryId' element={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Error />} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </CartProvider>

       





      </BrowserRouter>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='.'>
          Tienda Isa
        </a>
      </div>
    </>

  );
}


export default App;