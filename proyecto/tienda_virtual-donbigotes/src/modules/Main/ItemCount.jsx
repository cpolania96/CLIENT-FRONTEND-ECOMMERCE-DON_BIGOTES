import React from 'react'
import { useState } from 'react'

function ItemCount() {
    const [count, setCount] = useState(1)
    const [disable, setDisable] = useState(false)
    const buttonDisable = (ID) => this.querySelector(ID).disable
    const handleCount = () => {
        setCount(count + 1)
    }
    const lessCount = () => {
        if (count <= 1) {
            setDisable(true)
        }
        else {
            setCount(count - 1)
        }
    }
    if (disable == true) {
        buttonDisable("btnless")
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
