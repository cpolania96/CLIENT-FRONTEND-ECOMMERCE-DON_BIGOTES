import React from 'react'
import IconBack from '../../assets/svg/IconBack'
import IconHome from '../../assets/svg/IconHome'
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <main>
            <div className="container-content" id='checkout'>
                <h6>Finalizar Compra</h6>
                <div className="checkout">
                    <div className="form">
                        <form action="">
                            <div className='row'>
                                <label htmlFor="">Nombres: </label>
                                <input type="text" />
                                <label htmlFor="">Apellidos: </label>
                                <input type="text" />
                            </div>
                            <div className="row direccion">
                                <label htmlFor="">Dirección: </label>
                                <input type="text" />
                            </div>
                            <div className="row">
                                <label htmlFor="">Correo electrónico: </label>
                                <input type="text" />
                                <label htmlFor="">Ciudad: </label>
                                <input type="text" />
                            </div>
                            <div className="row"><label htmlFor="">Codigo postal:</label>
                                <input type="text" />
                                <label htmlFor="">Celular: </label>
                                <input type="text" /></div>
                        </form>
                        <button>Finalizar compra</button>
                    </div>
                    <div className="buttons">
                        <Link to="/"> <button className='home'><IconHome /></button></Link>
                        <button className='back'><IconBack /></button>
                    </div>
                    <div className="resumen">
                        <h6>Resumen</h6>
                        <div className="resumen-content">
                            <ul>
                                <li><span>Bálsamo humectante</span><span className='price'> $35.000</span></li>
                                <li><span>Shampoo brillo natural</span> <span className='price'> $50.000</span></li>
                                <li><span>Shampoo herbal </span><span className='price'> $40.000</span></li>
                                <li><span>Limpiador ótico </span><span className='price'> $20.000</span></li>
                            </ul>
                        </div>
                        <div className="total">Total: $35.000</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Checkout