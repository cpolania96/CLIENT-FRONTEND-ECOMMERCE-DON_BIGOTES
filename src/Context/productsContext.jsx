import { createContext, useState, useEffect } from "react"

// Create context

export const ProductsContext = createContext([])

export const ProductsContextProvider = ({ children }) => {
    const [productsList, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const URL = 'https://peaceful-sea-84601.herokuapp.com'
        fetch(`${URL}/api/productos/getAll`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw res
            })
            .then(data => {
                setProducts(data)
            })
            .finally(setTimeout(() => setLoading(false), 2000))
            .catch(error => console.log(error))
    }, [])

    console.log(productsList);
    return (
        <ProductsContext.Provider value={{
            productsList,
            loading
        }}>
            {children}
        </ProductsContext.Provider>
    )
}