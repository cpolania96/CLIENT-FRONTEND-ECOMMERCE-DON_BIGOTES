import React from 'react'
import IconDelete from '../../assets/svg/IconDelete'
import IconEdit from '../../assets/svg/IconEdit'

function Products({ product }) {
    return (
        <li>
            <span className='options'>
                <button><IconEdit /></button>
                <button><IconDelete /></button>
            </span>
            <div className='img'>
                <img src={product.thumbnail} alt="" />
            </div>
            <div className='info'>
                <ul>
                    <li className='one'>
                        <h6>Nombre: <span>{product.title}</span></h6>
                    </li>
                    <li className='two'>
                        <h6>Código: <span>{product.id}</span></h6>
                        <h6>Categoría: <span>Categoria</span></h6>
                    </li>
                    <li className='three'>
                        <h6>Contenido: <span>40g</span></h6>
                        <h6>Stock: <span>120 Unidades</span></h6>
                        <h6>Precio: <span>${product.price}</span></h6>
                    </li>
                    <li className='description'>
                        <h6>Descripcion: <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt beatae sit facere sed eligendi mollitia quam id, temporibus odio nam. Laudantium nihil sunt eius incidunt provident unde ...</span> </h6>
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default Products