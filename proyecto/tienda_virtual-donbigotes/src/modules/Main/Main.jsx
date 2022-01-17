import React from 'react'
import BannerDogCast from '../BannerDogCast/BannerDogCast'
import Posts from '../Posts/Posts'
import Social from '../social/Social'
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
            <div class="container-content">
                <InfoLabel />
                <BannerCarousell />
                <BannerCards />
                <MenuMascotas />
                <ContainerBanner TITLE={TITLE1} />
                <ContainerBanner TITLE={TITLE2} />
                <BannerDogCast />
                <Posts />
                <Social />
            </div>
        </main>
    )
}

export default Main
