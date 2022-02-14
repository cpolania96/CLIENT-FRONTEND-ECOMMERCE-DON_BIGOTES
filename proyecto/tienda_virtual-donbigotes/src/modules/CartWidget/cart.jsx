import React from 'react'
import CartIco from '../../assets/svg/icon-cart';
import CartItem from './CartItem';

function Cart() {
    return (
        <main>
            <div className="container-content" id='container-cart'>
                <h6><span><CartIco /></span>Mi carrito</h6>
                <div className='cart'>
                    <div className='cart-list'>
                        <CartItem />
                    </div>
                    <div className='cart-checkout'>
                        <h6>El valor total de tu compra es: <br />$58.000</h6>
                        <div className='options'>
                            <button>Vaciar Carrito</button>
                            <button>Seguir Comprando</button>
                            <button>Finalizar compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cart;