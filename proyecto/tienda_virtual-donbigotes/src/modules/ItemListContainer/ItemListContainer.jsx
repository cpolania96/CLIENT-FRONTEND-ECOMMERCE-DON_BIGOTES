import React, { useEffect, useState } from "react";
import ItemList from './ItemList/ItemList';
import { collection, getFirestore, getDocs, query } from 'firebase/firestore'
import { useParams } from "react-router-dom";


function ItemListContainer() {
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)
   const [arrayFiltrado, setArrayFiltrado] = useState([])
   const [isArrayFiltrado, setIsArrayFiltrado] = useState(false)
   const { categoryId } = useParams()
   useEffect(() => {
      const db = getFirestore()
      const queryCollection = query(collection(db, 'items'))
      getDocs(queryCollection)
         .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
         .finally(() => setLoading(false))
   }, [])
   const filterArray = (array, condicion) => {
      const arrayNuevo = array.filter(condicion)
      setArrayFiltrado(arrayNuevo)
   }
   useEffect(() => {
      filterArray(products, products.category === categoryId)
      setIsArrayFiltrado(true)
   }, [categoryId])

   console.log(products);
   if (isArrayFiltrado === false) {
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
   else {
      return (
         <>
            {loading ?
               <h3 id="loading"> Cargando </h3>
               :
               <ItemList items={arrayFiltrado} />
            }
         </>
      )
   }
}

export default ItemListContainer
