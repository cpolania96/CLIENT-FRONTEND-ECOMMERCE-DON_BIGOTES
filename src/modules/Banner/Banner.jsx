import React, { useEffect, useRef } from 'react'
import Imagen1 from './Img/1.jpg'
import Imagen2 from './Img/2.jpg'
import Imagen3 from './Img/3.jpg'
import Imagen4 from './Img/4.jpg'
import Slide from './Slide/Slide'

function Banner() {
    const slideshow = useRef(null)

    const next = () => {
        if (slideshow.current.children.length > 0) {
            const firstElement = slideshow.current.children[0]

            // Transición del slideshow
            slideshow.current.style.transition = `300ms ease-out all`
            const slideSize = slideshow.current.children[0].offsetWidth

            // Mover el slideshow
            slideshow.current.style.transform = `translateX(-${slideSize}px)`

            // Transicion
            const transition = () => {
                slideshow.current.style.transition = 'none'
                slideshow.current.style.transform = 'translateX(0)'
                slideshow.current.appendChild(firstElement)
                slideshow.current.removeEventListener('transitionend', transition)
            }
            slideshow.current.addEventListener('transitionend', transition)
        }


    }
    const before = () => {
        if (slideshow.current.children.length > 0) {
            const index = slideshow.current.children.length - 1
            const lastElement = slideshow.current.children[index]

            // Transición del slideshow
            slideshow.current.style.transition = `300ms ease-out all`
            const slideSize = slideshow.current.children[0].offsetWidth

            // Mover el slideshow
            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)

            // Transicion
            slideshow.current.style.transition = 'none'
            slideshow.current.style.transform = `translateX(-${slideSize}px)`
            setTimeout(() => {
                slideshow.current.style.transition = '300ms ease-out all'
                slideshow.current.style.transform = `translateX(0)`
            }, 30)
        }
    }
    useEffect(() => {
        setInterval(() => {
            next()
        }, 5000)
    }, [])

    const images = [
        {
            img: Imagen1,
            title: '15% DE DESCUENTO EN PRODUCTOS PARA PERROS'
        },
        {
            img: Imagen2,
            title: '15% DE DESCUENTO EN PRODUCTOS PARA GATOS'
        },
        {
            img: Imagen3,
            title: '15% DE DESCUENTO EN PRODUCTOS PARA GATOS'
        },
        {
            img: Imagen4,
            title: '15% DE DESCUENTO EN PRODUCTOS PARA LIEBRES'
        }
    ]
    return (
        <div className='banner-principal'>
            <div className="slideshow" ref={slideshow}>
                {images.map(item => <Slide item={item} next={next} before={before} />)}
            </div>
        </div>
    )
}

export default Banner