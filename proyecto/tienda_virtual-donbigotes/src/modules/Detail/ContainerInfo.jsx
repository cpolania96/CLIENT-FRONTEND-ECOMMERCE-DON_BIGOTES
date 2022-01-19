import React from 'react'
import IconInfo from '../svg/IconInfo'
import IconMessages from '../svg/IconMessages'

function ContainerInfo() {
    const titleInfo = "Información del producto"
    const titleComments = "Opiniones y comentarios"
    let productInfo = "info"
    return (
        <div className="container-comments">
            <div className='comments'>
                <h6><span><IconMessages /></span>{titleComments}</h6>
                <div className="comments-body">

                </div>

            </div>
            <div className='info-product'>
                <h6><span><IconInfo /></span>{titleInfo}</h6>
                <div className='info'>
                    <div className='info-title'>
                        <div className="title"></div>
                        <div className="title"></div>
                        <div className="title"></div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>

    )
}

export default ContainerInfo
