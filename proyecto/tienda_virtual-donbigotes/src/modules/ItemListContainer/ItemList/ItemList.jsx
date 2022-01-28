import React from 'react';
import Item from '../Item/Item';


function ItemList({ items }) {
    return (
        items.map(prod => <Item item={prod} />)
    )
}

export default ItemList;
