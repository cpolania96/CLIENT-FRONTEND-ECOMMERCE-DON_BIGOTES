import React, { useState, useEffect } from 'react'
import { getFetch } from '../Main/data/mockProducts'
import ContainerInfo from './ContainerInfo'
import Detail from './Detail'

function ContainerDetail() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    const name = productos.name
    const price = productos.price
    const weight = productos.weight
    return (
        <main>
            <div className="container-content container-detail">
                <Detail />
                <ContainerInfo />
            </div>
        </main>
    )
}

export default ContainerDetail
