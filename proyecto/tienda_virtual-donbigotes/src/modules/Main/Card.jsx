import React from 'react'
import IconCart from '../svg/IconCart'
import IconInfo from '../svg/IconInfo'
import IconStar from '../svg/IconStar'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

function Card({ info }) {
    const id = info.id
    const name = info.name
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
                <div class="img"></div>
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
                <button class="buy">
                    <h6>Comprar</h6>
                </button>
            </div>
        </div>
    )
}

export default Card
