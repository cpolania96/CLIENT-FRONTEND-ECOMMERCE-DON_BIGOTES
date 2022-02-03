import React, { useContext } from 'react'
import { CartContext } from '../../../Context/cartContext'
import IconInfo from '../../ProyectModules/svg/IconInfo'
import IconStar from '../../ProyectModules/svg/IconStar'
import ItemCount from '../../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

function Item({ item }) {
    const prod = item
    const { agregarAlCarrito } = useContext(CartContext)

    const onAdd = (cant) => {
        agregarAlCarrito(prod, cant)
    }
    const id = item.id
    const name = item.name
    const photo = item.photo
    const weight = item.weight
    const price = item.price
    const priceG = item.priceG()
    return (
        <div className="card">
            <div className="body">
                <Link to={`/detalle/${id}`}>
                    <div className="info">
                        <IconInfo />
                    </div>
                </Link>
                <div className="img">
                    <img src={photo} alt="" />
                </div>
                <div className="descript1">
                    <div className="name">{name}</div>
                    <div className="rating">
                        <div className="star">
                            <IconStar width="13" />
                            <IconStar width="13" />
                            <IconStar width="13" />
                            <IconStar width="13" />
                            <IconStar width="13" />
                        </div>
                    </div>
                    <div className="content">
                        <h6>
                            {weight}g
                        </h6>
                    </div>
                </div>
                <div className="descript2">
                    <div className="discount"></div>
                    <div className="price">${price.toLocaleString('de-DE')}</div>
                    <div className="price-g">(Gramo a ${priceG})</div>
                </div>
            </div>
            <div className="container-buy">
                <ItemCount buttonLabel="Comprar" onAdd={onAdd} />
            </div>
        </div>
    )
}

export default Item
