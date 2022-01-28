import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './modules/header/header';
import Main from './modules/Main/Main';
import Footer from './modules/Footer/Footer';
import ItemDetailContainer from './modules/Detail/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './modules/Context/cartContext';

const App = () => {
    const [products, setProducts] = useState()
    return (
        <BrowserRouter >
            <CartContextProvider >
                <Header />
                <Routes >
                    <Route exact path='/' element={<Main />} />
                    <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer />} />
                    <Route exact path='/' />
                </Routes>
                <Footer />
            </CartContextProvider>
        </BrowserRouter>

    )
}

export default App;
