import React from 'react'
import ContainerInfo from './ContainerInfo'
import Detail from './Detail'

function ContainerDetail({ prod }) {
    const detail = prod
    return (
        <main>
            <div className="container-content container-detail">
                <Detail Pdetail={detail} />
                <ContainerInfo />
            </div>
        </main>
    )
}

export default ContainerDetail
