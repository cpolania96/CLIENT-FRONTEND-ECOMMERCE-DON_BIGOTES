import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

function CartItem() {
    const imageURL = "https://res.cloudinary.com/devsy44f3/image/upload/v1643168330/Products/Mesa_de_trabajo_2_l8bbxg.png"
    return (
        <div className='cart-item'>
            <div className="image">
                <img src={imageURL} alt="" />
            </div>
            <div className="container-descript">
                <div className="name">Bálsamo humectante</div>
                <div className="descript">Crema humectante para perros y gatos, con extractos naturales y aroma a romero. Presentación de 40 gramos</div>
            </div>
            <div className="price">
                <ItemCount />
                <h6>$54.000</h6>
            </div>
            <button className='close'> X </button>
        </div>
    )
}

export default CartItem