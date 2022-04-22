import React from 'react'
import { useContext } from 'react'
import Spinner1 from '../../../assets/svg/Spinner1'
import { ProductsContext } from '../../../Context/productsContext'
import Products from '../Products'

function ProductsList() {
    const { productsList, loading } = useContext(ProductsContext)
    return (
        <div className='products-list'>
            <h2>Lista de productos</h2>
            <div className='container-products'>
                <ul>
                    {loading ?
                        <div id='spinner-productslist'><Spinner1 /></div>
                        :
                        productsList.map(item => <Products product={item} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProductsList