import React from 'react'
import ContainerInfo from './ContainerInfo'
import Detail from './Detail'

function ContainerDetail({ prod }) {
    return (
        <main>
            <div className="container-content container-detail">
                <Detail item={prod} />
                <ContainerInfo />
            </div>
        </main>
    )
}

export default ContainerDetail
