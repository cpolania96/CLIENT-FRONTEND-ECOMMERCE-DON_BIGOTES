import React from 'react';
import Card from '../Main/Card';


function ItemList({ data }) {
    return (
        data.map(prod => <Card info={prod} />)
    )
}

export default ItemList;
