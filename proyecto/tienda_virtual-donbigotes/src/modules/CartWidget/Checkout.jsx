import { React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../Context/cartContext";
import { collection, getFirestore, getDocs, query, addDoc } from 'firebase/firestore'
import MessageCheck from './MessageCheck';
import IconHome from '../../assets/svg/IconHome';
import IconBack from '../../assets/svg/IconBack';

function Checkout() {
    const { cartList, getTotal } = useContext(CartContext)
    const [orderId, setOrderId] = useState({})
    const [isBuy, setIsBuy] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [dataForm, setdataForm] = useState({
        nombres: '',
        apellidos: '',
        direccion: '',
        email: '',
        ciudad: '',
        codigoPostal: '',
        celular: ''
    })

    function handleChange(e) {
        setdataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(Loading);
    const realizarCompra = async () => {
        setLoading(true)
        let orden = {};
        console.log(orderId);
        orden.buyer = dataForm;
        orden.total = getTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.title;
            const precio = cartItem.price * cartItem.cantidad;
            return { id, nombre, precio };
        });
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        await addDoc(orderCollection, orden)
            .then(res => setOrderId(() => res.id))
            .then(setTimeout(() => {
                setLoading(false)
            }, 5000))
            .finally(setIsBuy(true))
    }
    function showForm() {
        if (cartList.length === 0) {
            return (
                <>
                    <div id="empty-message">
                        <h6>Tu carrito esta vacío<br /> ¡Esperamos lo llenes pronto!</h6>
                        <div className="buttons">
                            <Link to="/" ><button>Elige productos</button></Link>
                        </div>
                    </div>
                </>
            )
        } else if (cartList.length !== 0) {
            function getDiv() {
                const id = orderId.toString()
                if (isBuy === false) {
                    return (
                        <>
                            <h6>Finalizar Compra</h6>
                            <div className="checkout">
                                <div className="form">
                                    <form onSubmit={realizarCompra}>
                                        <div className='row'>
                                            <label htmlFor="">Nombres: </label>
                                            <input
                                                type="text"
                                                name="nombres"
                                                id='nombres'
                                                onChange={handleChange}
                                                value={dataForm.nombres}
                                            />
                                            <label htmlFor="">Apellidos: </label>
                                            <input
                                                type="text"
                                                name='apellidos'
                                                onChange={handleChange}
                                                value={dataForm.apellidos}
                                            />
                                        </div>
                                        <div className="row direccion" >
                                            <label htmlFor="">Dirección: </label>
                                            <input
                                                type="text"
                                                name='direccion'
                                                onChange={handleChange}
                                                value={dataForm.direccion}
                                            />
                                        </div>
                                        <div className="row">
                                            <label htmlFor="">Correo electrónico: </label>
                                            <input
                                                type="text"
                                                name='email'
                                                value={dataForm.email}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="">Ciudad: </label>
                                            <input type="text"
                                                onChange={handleChange}
                                                name='ciudad'
                                                value={dataForm.ciudad}
                                            />
                                        </div>
                                        <div className="row"><label htmlFor="">Codigo postal:</label>
                                            <input
                                                type="text"
                                                name='codigoPostal'
                                                onChange={handleChange}
                                                value={dataForm.codigoPostal}
                                            />
                                            <label htmlFor="">Celular: </label>
                                            <input
                                                type="text"
                                                name='celular'
                                                onChange={handleChange}
                                                value={dataForm.celular}
                                            /></div>
                                        <input type='submit' value="Comprar"></input>
                                    </form>

                                </div>
                                <div className="buttons">
                                    <Link to="/"> <button className='home'><IconHome /></button></Link>
                                    <Link to="/cart/"><button className='back'><IconBack /></button></Link>
                                </div>
                                <div className="resumen">
                                    <h6>Resumen</h6>
                                    <div className="resumen-content">
                                        <ul>
                                            {cartList.map(item => <><li><span className='cant'>{item.cantidad}</span><span>{item.title}</span><span className='price'>$ {item.price.toLocaleString('de-DE')}</span></li></>)}

                                        </ul>
                                    </div>
                                    <div className="total">Total: ${getTotal().toLocaleString('de-DE')}</div>
                                </div>
                            </div>
                        </>
                    )
                } else {
                    return (
                        <>
                            {Loading ?
                                <h3 id='loading'>Procesando pedido <br /></h3>
                                :
                                isBuy && <MessageCheck id={id} />
                            }
                        </>
                    )
                }
            }
            return getDiv()

        }

    }
    console.log(orderId);
    return (
        <main>
            <div className="container-content" id='checkout'>
                {showForm()}
            </div>
        </main>
    )
}


export default Checkout