import { getFirestore, getDoc, query, collection } from 'firebase/firestore'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemListContainer/ItemList/ItemList';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function ContainerCategory() {
    const [productCategory, setProductCategory] = useState([])
    const [products, setProducts] = useState([])
    const [Loading, setLoading] = useState(false)
    const { categoryId } = useParams()







    // useEffect(() => {
    //     const db = getFirestore()
    //     const queryCollection = query(collection(db, 'items'))
    //     setLoading(true)
    //     getDoc(queryCollection)
    //         .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
    //         .then(setProductCategory(products.docs.filter(prod => (prod.category === categoryId))))
    //         .finally(setLoading(false))

    // }, [categoryId])
    // console.log(products);
    return (
        <main>
            <div className="container-content">
                <h6 id='titleCategory'>Limpiadores corporales</h6>
                <div id="content">
                    <div className="items"><ItemListContainer /></div>

                </div>

            </div>
        </main>

    )

}

export default ContainerCategory