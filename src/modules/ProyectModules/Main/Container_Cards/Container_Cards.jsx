import React from 'react'

function Container_Cards() {
    const cards = [{
        title: 'Alimento',
        content: 'https://res.cloudinary.com/devsy44f3/image/upload/c_thumb,g_face,w_200/v1653278296/Products/600ebfe486480-removebg-preview_pjmlyr.png'
    },
    {
        title: 'Snacks',
        content: 'https://res.cloudinary.com/devsy44f3/image/upload/c_thumb,w_200,g_face/v1653279196/Products/Captura_de_pantalla_2022-05-22_231250-removebg-preview_nffp3y.png'
    },
    {
        title: 'Champús',
        content: 'https://res.cloudinary.com/devsy44f3/image/upload/c_thumb,w_200,g_face/v1653280406/Products/pixlr-bg-result_3_eba6t1.png'
    },
    {
        title: 'Limpiadores',
        content: 'https://res.cloudinary.com/devsy44f3/image/upload/c_thumb,w_200,g_face/v1653280323/Products/pixlr-bg-result_2_lardwx.png'
    },
    {
        title: 'Juguetería',
        content: 'https://res.cloudinary.com/devsy44f3/image/upload/c_thumb,w_200,g_face/v1653278945/Products/Captura_de_pantalla_2022-05-22_230821-removebg-preview_acdjds.png'
    }]
    return (
        <div className='container-cards-banner'>
            {cards.map(item =>
                <div className='card'>
                    <img src={`${item.content}`} alt="" />
                    <h4>{`${item.title}`}</h4>
                </div>)}
        </div>
    )
}

export default Container_Cards