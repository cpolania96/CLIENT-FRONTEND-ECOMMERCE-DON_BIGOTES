import React from 'react'
import IconCart from '../svg/IconCart'
import IconInfo from '../svg/IconInfo'
import IconStar from '../svg/IconStar'
import ItemCount from './ItemCount'

function Card({ info }) {
    const name = info.name
    const weight = info.weight
    const price = info.price
    const priceG = info.priceG()
    return (
        <div class="card">
            <div class="body">
                <div class="info">
                    <IconInfo />
                </div>
                <div class="img"></div>
                <div class="descript1">
                    <div class="name">{name}</div>
                    <div class="rating">
                        <div class="star">
                            <IconStar />
                            <IconStar />
                            <IconStar />
                            <IconStar />
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
