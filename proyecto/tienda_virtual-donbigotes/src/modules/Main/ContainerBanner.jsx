import React, { useEffect, useState } from "react";
import Ad from '../button/Ad'
import At from '../button/At'
import Card from './Card'
import { getFetch } from '../Main/data/mockProducts'

function ContainerBanner({ TITLE }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(False))
    }, [])

    return (
        <div class="banner">
            <div class="title">
                <h6>{TITLE}</h6>
                <div class="selector">
                    <At />
                    <Ad />
                </div>
            </div>
            <div class="container-cards">
                {productos.map(prod => <Card info={prod} />)}
            </div>
        </div>
    )
}

export default ContainerBanner
