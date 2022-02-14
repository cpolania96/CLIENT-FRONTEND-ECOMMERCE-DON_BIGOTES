import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ContainerDetail from '../ItemDetailContainer/ContainerDetail';

function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const { detalleId } = useParams()
    console.log(detalleId);
    useEffect(() => {
        const db = getFirestore()
        const queryProd = doc(db, "items", detalleId)
        getDoc(queryProd)
            .then(res => { setProduct({ id: res.id, ...res.data() }) })
    }, [detalleId])
    console.log(product);
    return (
        <ContainerDetail prod={product} />
    )
}

export default ItemDetailContainer;
