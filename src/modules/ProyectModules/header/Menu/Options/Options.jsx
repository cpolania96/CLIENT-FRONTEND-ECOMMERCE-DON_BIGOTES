import React from 'react'


function Options({ info, setKeepVisible }) {
    const renderMenu = () => {
        if (info.lenght !== 0) {
            const data = info.map(data =>
                <ul>
                    <li className='title'>
                        <span>{data.icon}</span>
                        <h2>{data.title}</h2>
                    </li>
                    <li className='content'>
                        <h2>{data.item1}</h2>
                    </li>
                    <li className='content'>
                        <h2>{data.item2}</h2>
                    </li>
                    <li className='content'>
                        <h2>{data.item3}</h2>
                    </li>
                    <li className='content'>
                        <h2>{data.item4}</h2>
                    </li>
                    <li className='see-more'>
                        <h2>Ver más...</h2>
                    </li>
                </ul>)
            return data
        }
    }

    return (
        <div
            className='options'
            onMouseEnter={() => { setKeepVisible(true) }}
            onMouseLeave={() => { setKeepVisible(false) }}
        >
            {renderMenu()}
        </div>
    )
}

export default Options