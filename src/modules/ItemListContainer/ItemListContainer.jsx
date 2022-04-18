import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList/ItemList';

function ItemListContainer({ title }) {
   const { categoryId } = useParams()
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const URL = 'https://peaceful-sea-84601.herokuapp.com/'

      if (categoryId) {
         //    fetch(`${URL}/products/getAll`)
         //       .then(res => res.json())
         //       .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
         //       .then(title("Productos"))
         //       .finally(() => setTimeout(() => setLoading(false)), 3000)
         // } else {
         fetch(`${URL}/products/getAll`)
            .then(res => console.log(res.json()))
            .then(res => setProducts(res.map(prod => ({ id: prod.id, ...prod.data() }))))
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


