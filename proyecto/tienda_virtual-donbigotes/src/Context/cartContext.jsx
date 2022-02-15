// Creación de contexto
import { createContext, useState } from 'react';
export const CartContext = createContext([])
// Creacion del provider
export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])
  function agregarAlCarrito(product, cantidad) {
    setCartList([...cartList, { ...product, cantidad }])
  }
  function vaciarCarrito() {
    setCartList([])
  }
  console.log(cartList);
  return (
    <CartContext.Provider value={{
      cartList,
      agregarAlCarrito,
      vaciarCarrito
    }}>
      {children}
    </CartContext.Provider>
  )
}



