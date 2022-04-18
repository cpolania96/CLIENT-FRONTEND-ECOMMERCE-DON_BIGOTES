import React from 'react'
import IconDelete from '../../../assets/svg/IconDelete'
import IconEdit from '../../../assets/svg/IconEdit'

function ProductsList() {
    return (
        <div className='products-list'>
            <h2>Lista de productos</h2>
            <div className='container-products'>
                <ul>
                    <li>
                        <span className='options'>
                            <button><IconEdit /></button>
                            <button><IconDelete /></button>
                        </span>
                        <div className='img'>
                            <img src="https://res.cloudinary.com/devsy44f3/image/upload/v1645523915/Products/Mesa_de_trabajo_12_2x-100_a0qyms.jpg" alt="" />
                        </div>
                        <div className='info'>
                            <ul>
                                <li className='one'>
                                    <h6>Nombre: <span>Blanqueador</span></h6>
                                </li>
                                <li className='two'>
                                    <h6>Código: <span>454836565</span></h6>
                                    <h6>Categoría: <span>Categoria</span></h6>
                                </li>
                                <li className='three'>
                                    <h6>Contenido: <span>40g</span></h6>
                                    <h6>Stock: <span>120 Unidades</span></h6>
                                    <h6>Precio: <span>$75.000</span></h6>
                                </li>
                                <li className='description'>
                                    <h6>Descripcion: <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt beatae sit facere sed eligendi mollitia quam id, temporibus odio nam. Laudantium nihil sunt eius incidunt provident unde </span> </h6>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductsList