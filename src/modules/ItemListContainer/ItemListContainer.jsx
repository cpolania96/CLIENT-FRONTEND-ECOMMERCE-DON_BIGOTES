import React, { useContext } from "react";
import ItemList from './ItemList/ItemList';
import { ProductsContext } from "../../Context/productContext";

function ItemListContainer() {
   const { products, loading } = useContext(ProductsContext)
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


