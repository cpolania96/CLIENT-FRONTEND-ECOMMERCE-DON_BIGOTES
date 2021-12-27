import './App.css';
import React from 'react';
import Header from './modules/header/header';
import ItemListContainer from './modules/ItemListContainer/ItemListContainer';

const App = () => {
    const saludo = "Camilo";
    const saludo_2 = "Pepe"
    return (
        <>
            <Header />
            <ItemListContainer saludo={saludo}/>
            <ItemListContainer saludo={saludo_2}/>
        </>
    )
}

export default App;
