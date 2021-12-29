import React from 'react'
import { useState } from 'react'

function ItemCount() {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count+1)
    }
    const lessCount = () => {
        setCount(count-1)
    }
    return (
        <div class="ItemCount">
            <button class="btnless" onClick={lessCount}>-</button>
            <h6>{count}</h6>
            <button class="btnplus" onClick={handleCount}>+</button>
        </div>
    )
}

export default ItemCount
