import React from 'react'
import ProductsForm from './ProductsForm/ProductsForm'
import ProductsList from './ProductsList/ProductsList'

function AddProducts() {
    return (
        <div id="container-addproducts">
            <h1>Gestión de productos</h1>
            <div className='products'>
                <ProductsForm />
                <ProductsList />
            </div>
        </div>
    )
}

export default AddProducts