import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './modules/ProyectModules/header/header';
import Main from './modules/ProyectModules/Main/Main';
import Footer from './modules/ProyectModules/Footer/Footer';
import ItemDetailContainer from './modules/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './Context/cartContext';
import ContainerCategory from './modules/ItemListContainer/ContainerCategory';
import Checkout from './modules/CartWidget/Checkout'
import Cart from './modules/CartWidget/cart';
import AddProducts from './modules/AddProducts/AddProducts';
import { ProductsContextProvider } from './Context/productsContext';

const App = () => {
    return (
        <ProductsContextProvider>
            <CartContextProvider >
                <BrowserRouter >
                    <Header />
                    <Routes >
                        <Route exact path='/' element={<Main />} />
                        <Route exact path='/detalle/:detailId' element={<ItemDetailContainer />} />
                        <Route exact path='/categoria/:categoryId' element={<ContainerCategory />} />
                        <Route exact path='/cart' element={<Cart />} />
                        <Route exact path='/cart/checkout' element={<Checkout />} />
                        <Route exact path='/private/add-products' element={<AddProducts />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </ProductsContextProvider>
    )
}

export default App;
