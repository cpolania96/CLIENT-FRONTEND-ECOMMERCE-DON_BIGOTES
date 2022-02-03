import React from 'react'
import BannerCards from './BannerCards'
import BannerCarousell from './BannerCarousell'
import ContainerBanner from './ContainerBanner'
import InfoLabel from './InfoLabel'
import MenuMascotas from './MenuMascotas'

function Main() {
    const TITLE1 = "Ofertas y más ofertas..."
    const TITLE2 = "Los más vendidos..."
    return (
        <main>
            <div className="container-content">
                <InfoLabel />
                <BannerCarousell />
                <BannerCards />
                <ContainerBanner TITLE={TITLE2} />
            </div>
        </main>
    )
}

export default Main
