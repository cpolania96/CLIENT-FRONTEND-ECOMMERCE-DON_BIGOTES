import { getFetch } from '../Main/data/mockProducts';
import React, { useEffect, useState } from "react";
import Card from '../Main/Card'


function ItemListContainer() {
   const [productos, setProductos] = useState([])
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      getFetch
         .then(resp => setProductos(resp))
         .catch(err => console.log(err))
         .finally(() => setLoading(false))
   }, [])
   return productos.map(prod => <Card info={prod} />)
}

export default ItemListContainer
