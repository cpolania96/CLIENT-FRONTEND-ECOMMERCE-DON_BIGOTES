import React, { createContext, useEffect, useState } from 'react'
export const ProductsContext = createContext([])

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [productsPOST, setProductsPOST] = useState({
        product_name: ' ',
        product_umed: ' ',
        product_category: ' ',
        product_thumbnail: ' ',
        product_weight: ' ',
        product_stock: ' ',
        product_price: ' ',
        product_description: ' '
    })
    const [load, isLoad] = useState(false)
    const [loading, setLoading] = useState(true)
    const [useID, setUseID] = useState()

    const URL = 'http://localhost:9090'

    const handlerChange = (e) => {
        setProductsPOST({
            ...productsPOST,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const RUTA = `${URL}/api/productos/getAll`
        fetch(RUTA)
            .then(response => response.json())
            .then(data => setProducts(data.docs))
            .then(setTimeout(() => {
                setLoading(false)
            }, 1000))
    }, [load])

    const handlerSubmit = () => {
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productsPOST)
        }
        fetch(`${URL}/api/productos/save`, requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

        setProductsPOST({
            product_name: ' ',
            product_umed: ' ',
            product_category: ' ',
            product_thumbnail: ' ',
            product_weight: ' ',
            product_stock: ' ',
            product_price: ' ',
            product_description: ' '
        })
    }
    const handlerDelete = (id) => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch(`${URL}/api/productos/${id}`, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
            .finally(isLoad(true))
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                handlerSubmit,
                handlerChange,
                handlerDelete,
                loading,
                useID,
                setUseID
            }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider