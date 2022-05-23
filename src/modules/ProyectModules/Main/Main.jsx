import React from 'react'
import Banner from '../../Banner/Banner'
import Container_Content from '../../Containers/Container_Content/Container_Content'
import ContainerBanner from './ContainerBanner'
import InfoLabel from './InfoLabel'
import Container_Cards from './Container_Cards/Container_Cards'

function Main() {
    const TITLE2 = "Los más vendidos..."
    return (
        <main>
            <Container_Content>
                <InfoLabel />
                <Banner />
                <Container_Cards />
                <ContainerBanner TITLE={TITLE2} />
            </Container_Content>
        </main>
    )
}

export default Main
