import React, { useEffect, useState } from "react";
import ItemList from './ItemList/ItemList';
import { collection, getFirestore, getDocs, query } from 'firebase/firestore'


function ItemListContainer() {
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      const db = getFirestore()
      const queryCollection = query(collection(db, 'items'))
      getDocs(queryCollection)
         .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
         .finally(() => setLoading(false))
   }, [])

   console.log(products);

   return (
      <>
         {loading ?
            <h3 id="loading"> Cargando </h3>
            :
            <ItemList items={products} />
         }

      </>
   )
}

export default ItemListContainer
