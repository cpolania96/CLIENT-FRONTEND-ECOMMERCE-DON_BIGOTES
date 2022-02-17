import React from 'react'
import IconCheck from '../../assets/svg/IconCheck'
import IconHome from '../../assets/svg/IconHome'
import { Link } from 'react-router-dom'

function MessageCheck({ id }) {
    return (
        <>
            <span><IconCheck /></span>
            <h6>¡Tu compra ha sido exitosa!</h6>
            <h6 id="title-check">Tu numero de pedido es: <br />{id}</h6>
            <span><Link to="/"><IconHome /></Link></span>
        </>
    )
}

export default MessageCheck