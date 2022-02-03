import React from 'react'
import { useState } from 'react'

function ItemCount({ onAdd, buttonLabel }) {
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
        <>
            <div className="ItemCount">
                <button className="btnless" onClick={lessCount}>-</button>
                <h6>{count}</h6>
                <button className="btnplus" onClick={handleCount}>+</button>
            </div>
            <div className='buy add-cart' onClick={() => onAdd(count)}>
                <button>{buttonLabel}</button>
            </div>
        </>
    )
}

export default ItemCount
