import { getFetch } from '../ProyectModules/Main/data/mockProducts';
import React, { useEffect, useState } from "react";
import ItemList from './ItemList/ItemList';


function ItemListContainer() {
   const [productos, setProductos] = useState([])
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      getFetch
         .then(resp => setProductos(resp))
         .catch(err => console.log(err))
         .finally(() => setLoading(false))
   }, [])
   return (
      <ItemList items={productos} />
   )
}

export default ItemListContainer
