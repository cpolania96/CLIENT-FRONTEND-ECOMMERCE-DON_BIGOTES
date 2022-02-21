import React from 'react'
import ItemListContainer from './ItemListContainer'

function ContainerCategory({ prod }) {
    return (
        <main>
            <div className="container-content container-detail" id='container-category'>
                <h6 className='title'>Limpiadores Corporales</h6>
                <div className="container-items">
                    <ItemListContainer />
                </div>
            </div>
        </main>
    )
}

export default ContainerCategory
