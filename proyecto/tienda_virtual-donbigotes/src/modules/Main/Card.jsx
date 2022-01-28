import React, { useContext } from 'react'
import { CartContext } from '../Context/cartContext'
import IconCart from '../svg/IconCart'
import IconInfo from '../svg/IconInfo'
import IconStar from '../svg/IconStar'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

function Card({ info }) {
    // Obtener contexto
    const { cartList, agregarAlCarrito } = useContext(CartContext)
    // Función para agregar productos al carrito
    function onAdd(cant) {
        agregarAlCarrito({ ...info, cantidad: cant })
    }
    console.log(cartList);
    // Constructor de la tarjeta
    const id = info.id
    const name = info.name
    const photo = info.photo
    const weight = info.weight
    const price = info.price
    const priceG = info.priceG()
    return (
        <div class="card">
            <div class="body">
                <Link to={`/detalle/${id}`}>
                    <div class="info">
                        <IconInfo />
                    </div>
                </Link>
                <div class="img">
                    <img src={photo} alt="" />
                </div>
                <div class="descript1">
                    <div class="name">{name}</div>
                    <div class="rating">
                        <div class="star">
                            <IconStar width="13" />
                            <IconStar width="13" />
                            <IconStar width="13" />
                            <IconStar width="13" />
                            <IconStar width="13" />
                        </div>
                    </div>
                    <div class="content">
                        <h6>
                            {weight}g
                        </h6>
                    </div>
                </div>
                <div class="descript2">
                    <div class="discount"></div>
                    <div class="price">${price.toLocaleString('de-DE')}</div>
                    <div class="price-g">(Gramo a ${priceG})</div>
                </div>
            </div>
            <div class="container-buy">
                <ItemCount />
                <button class="buy" onClick={onAdd}>
                    <h6>Comprar</h6>
                </button>
            </div>
        </div>
    )
}

export default Card
