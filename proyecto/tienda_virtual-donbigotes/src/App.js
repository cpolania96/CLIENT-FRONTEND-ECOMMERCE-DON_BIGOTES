import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './modules/header/header';
import Main from './modules/Main/Main';
import ContainerDetail from "./modules/Detail/ContainerDetail";

const App = () => {
    return (
        <BrowserRouter >
            <Header />
            <Routes >
                <Route exact path='/' element={<Main />} />
                <Route exact path='/detalle/' element={<ContainerDetail />} />
                <Route exact path='/' />
            </Routes>

        </BrowserRouter>
    )
}

export default App;
