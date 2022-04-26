import React from 'react'
import { useContext } from 'react'
import Spinner1 from '../../../../assets/animations/spinner1/Spinner1'
import Products from '../../Products'
import { ProductsContext } from '../../../../Context/productsContext'

function ProductsList() {
    const { loading, productsList } = useContext(ProductsContext)

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