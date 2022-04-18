import React from 'react'

function ProductsForm() {
    return (
        <div className="addproducts-form">
            <h2>Agregar Producto</h2>
            <form action="" method='POST'>
                <ul>
                    <li><span>Nombre: </span><input type="text" autoComplete='off' /></li>
                    <li><span>Categoria: </span><input type="text" /></li>
                    <li><span>Imagen (URL): </span><input type="text" /></li>
                    <li><span>Contenido: </span><input type="text" /></li>
                    <li><span>Stock: </span><input type="text" /></li>
                    <li><span>Precio: </span><input type="text" /></li>
                    <li><span>Descripción: </span><input type="text" /></li>
                    <li className='btn-form'>
                        <input type='submit' value='Guardar'></input>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default ProductsForm