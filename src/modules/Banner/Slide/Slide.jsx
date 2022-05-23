import React from 'react'
import Icon_ArrowLeft from '../../../assets/svg/Icon_ArrowLeft'
import Icon_ArrowRight from '../../../assets/svg/Icon_ArrowRight'

function Slide({ item, next, before }) {
    return (
        <div className="slide">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
            <div className='buttons'>
                <button onClick={() => before()}><Icon_ArrowLeft /></button>
                <button onClick={() => next()}><Icon_ArrowRight /></button>
            </div>
        </div>
    )
}

export default Slide