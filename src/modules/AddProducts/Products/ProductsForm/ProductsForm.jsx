import React from 'react'

function ProductsForm({ products, setProducts }) {

    const handlerChange = (e) => {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }
    const handlerSubmit = () => {
        const URL = 'https://localhost:8080'
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: products
        }
        fetch(`${URL}/api/productos/save`, requestInit)
            .then(res => res.json())
            .then(res => console.log(res))
        setProducts({
            product_name: ' ',
            product_category: ' ',
            product_thumbnail: ' ',
            product_weight: ' ',
            product_stock: ' ',
            product_price: ' ',
            product_description: ' '
        })
    }

    return (
        <div className="addproducts-form">
            <h2>Agregar Producto</h2>
            <form method='POST' onSubmit={handlerSubmit}>
                <ul>
                    <li><span>Nombre: </span><input onChange={handlerChange} type="text" autoComplete='off' name='product_name' /></li>
                    <li><span>Categoria: </span><input onChange={handlerChange} type="text" name='product_category' /></li>
                    <li><span>Imagen (URL): </span><input onChange={handlerChange} type="text" name='product_thumbnail' /></li>
                    <li><span>Contenido: </span><input onChange={handlerChange} type="text" name='product_weight' /></li>
                    <li><span>Stock: </span><input onChange={handlerChange} type="text" name='product_stock' /></li>
                    <li><span>Precio: </span><input onChange={handlerChange} type="text" name='product_price' /></li>
                    <li><span>Descripción: </span><input onChange={handlerChange} type="text" name='product_description' /></li>
                    <li className='btn-form'>
                        <input type='submit' value='Guardar'></input>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default ProductsForm