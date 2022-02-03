import React, { useRef } from 'react'
import IconDelete from '../../assets/svg/IconDelete'
import ItemCart from './ItemCart'

function ContainerCart() {
    const cartIsVisible = useRef()
    return (
        <div id="cart-style" ref={cartIsVisible}>
            <div className="container-products">
                <div className="item-cart">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="description">

                    </div>
                </div>


                {/* <ItemCart /> */}
            </div>
            <div className="container-button">
                <button>
                    Finalizar Compra
                </button>
                <button className='delete-all'>
                    <IconDelete />
                </button>
            </div>
        </div>
    )
}

export default ContainerCart

