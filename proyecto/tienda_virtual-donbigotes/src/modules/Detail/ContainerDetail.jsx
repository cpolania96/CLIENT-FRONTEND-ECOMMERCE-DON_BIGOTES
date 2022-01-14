import React, { useState, useEffect } from 'react'
import { getFetch } from '../Main/data/mockProducts'
import ItemCount from '../Main/ItemCount'
import IconStar from '../svg/IconStar'

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
                <div className="detail">
                    <div className='photo'></div>
                    <div className='info'>
                        <div className="rows r1">Bálsamo Humectante y Curativo</div>
                        <div className="rows r2">
                            <h6>Marca: Don Bigotes</h6>
                            <h6>Referencia: 258488247 </h6>
                        </div>
                        <div className="rows r3">
                            <div className='container-star'>
                                <IconStar width="27" />
                                <IconStar width="27" />
                                <IconStar width="27" />
                                <IconStar width="27" />
                                <IconStar width="27" />
                            </div>
                            <div className='rate'>
                                4.8/5
                            </div>
                        </div>
                        <div className="rows r4">
                            <h6 className='price'>$35.000</h6>
                            <h6 className='label'>IVA incluido*</h6>
                        </div>
                        <div className="rows r5">
                            <h5>Selecciona la referencia que deseas: </h5>
                            <div className='container-button'>
                                <button>
                                    500ml
                                </button>
                            </div>
                            <h6>
                                Stock: Disponible
                            </h6>
                        </div>
                        <div className="rows r6">
                            <div className='label'>Con esta compra sumas 35 bigopuntos </div>
                            <button>
                                más info
                            </button>
                        </div>
                        <div className="rows r7">
                            <ItemCount />
                            <div className='add-cart'>
                                <button>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ContainerDetail