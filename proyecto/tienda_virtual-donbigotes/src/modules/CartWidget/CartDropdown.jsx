import React, { useRef } from 'react'
import IconDelete from '../../assets/svg/IconDelete'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'

function ContainerCart() {
    const cartIsVisible = useRef()
    const { cartList, vaciarCarrito } = useContext(CartContext)
    console.log(cartList);
    return (
        <div id="cart-style" ref={cartIsVisible}>
            <div className="container-products">
                <div className="products">
                    {cartList.map(prod =>
                        <div className="item-cart">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="description">
                                <div className="name">{prod.title}</div>
                                <div className="descript">Contenido: {prod.weight}g</div>
                                <div className="price">${prod.price}</div>
                            </div>
                            <button className='close'>X</button>
                        </div>)}
                </div>

            </div>
            <div className="container-button">
                <button>
                    Finalizar Compra
                </button>
                <button className='delete-all' onClick={vaciarCarrito}>
                    <IconDelete />
                </button>
            </div>
        </div>
    )
}

export default ContainerCart

