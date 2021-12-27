import './App.css';
import React from 'react';
import Header from './modules/header/header';
import ItemListContainer from './modules/ItemListContainer/ItemListContainer';

const App = () => {
    return (
        <>
            <Header />
            <ItemListContainer saludo="Camilo"/>
            <ItemListContainer saludo="Pepe"/>
        </>
    )
}

export default App;
