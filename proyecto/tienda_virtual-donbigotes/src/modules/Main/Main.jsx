import React from 'react'
import BannerCards from './BannerCards'
import BannerCarousell from './BannerCarousell'
import BannerOfertas from './BannerOfertas'
import InfoLabel from './InfoLabel'
import MenuMascotas from './MenuMascotas'

function Main() {
    return (
        <main>
            <div class="container-content">
                <InfoLabel />
                <BannerCarousell />
                <BannerCards />
                <MenuMascotas />
                <BannerOfertas />
            </div>
        </main>
    )
}

export default Main
