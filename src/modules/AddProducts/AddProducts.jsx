import React, { useState } from 'react'
import ProductsForm from './Products/ProductsForm/ProductsForm'
import ProductsList from './Products/ProductsList/ProductsList'

function AddProducts() {
    const [products, setProducts] = useState({
        product_name: ' ',
        product_category: ' ',
        product_thumbnail: ' ',
        product_weight: ' ',
        product_stock: ' ',
        product_price: ' ',
        product_description: ' '
    })
    return (
        <div id="container-addproducts">
            <h1>Gestión de productos</h1>
            <div className='products'>
                <ProductsForm products={products} setProducts={setProducts} />
                <ProductsList productsList={products} />
            </div>
        </div>
    )
}

export default AddProducts