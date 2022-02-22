import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList/ItemList';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'



function ItemListContainer() {
   const { categoryId } = useParams()
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      const db = getFirestore()
      if (categoryId) {
         const queryFilter = query(collection(db, 'items'), where("category", "==", categoryId))
         const category = (categoryId) => {
            const categoryIds = {
               id1: "cremas-y-balsamos",
               id2: "limpiadores-corporales",
               id3: "champus",
               id4: "acondicionadores"
            }
            const categoriesTitles = {
               cat1: "Cremas y bálsamos",
               cat2: "Limpiadores Corporales",
               cat3: "Champús",
               cat4: "Acondicionadores"
            }
            if (categoryId === categoryIds.id1) {
               return categoriesTitles.cat1
            } else if (categoryId === categoryIds.id2) {
               return categoriesTitles.cat2
            } else if (categoryId === categoryIds.id3) {
               return categoriesTitles.cat3
            } else if (categoryId === categoryIds.id4) {
               return categoriesTitles.cat4
            }
         }
         getDocs(queryFilter)
            .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .finally(() => setLoading(false))
      } else {
         const queryCollection = query(collection(db, 'items'))
         getDocs(queryCollection)
            .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .finally(() => setLoading(false))
      }
   }, [categoryId])

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
