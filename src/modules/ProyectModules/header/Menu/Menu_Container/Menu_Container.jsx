import React, { useState } from 'react'
import Icon_Bonne from '../../../../../assets/svg/Icon_Bonne'
import Icon_DogFood from '../../../../../assets/svg/Icon_DogFood'
import Icon_Health from '../../../../../assets/svg/Icon_Health'
import Options from '../Options/Options'
import Title_Menu from './Title_Menu'

function Menu_Container({ setMenuIsVisible }) {
    const [showMenuDog, setShowMenuDog] = useState(false)
    const [showMenuCat, setShowMenuCat] = useState(false)
    const [keepVisibleCat, setKeepVisibleCat] = useState(false)
    const [keepVisibleDog, setKeepVisibleDog] = useState(false)

    const menuDogs = [{
        title: 'Alimento',
        icon: <Icon_DogFood />,
        item1: 'Concentrado',
        item2: 'Húmedo',
        item3: 'Barf',
        item4: 'Snacks'
    }, {
        title: 'Salud y belleza',
        icon: <Icon_Health />,
        item1: 'Bálsamos y cremas',
        item2: 'Limpiadores corporales',
        item3: 'Champús y Acondicionadores',
        item4: 'Snacks'
    }, {
        title: 'Juguetería',
        icon: <Icon_Bonne />,
        item1: 'Huesos curados',
        item2: 'Juguetes',
        item3: 'Peluches',
        item4: 'Interactivos'
    }]

    const menuCats = [{
        title: 'Alimento',
        icon: <Icon_DogFood />,
        item1: 'Concentrado',
        item2: 'Húmedo',
        item3: 'Barf',
        item4: 'Snacks'
    }, {
        title: 'Salud y belleza',
        icon: <Icon_Health />,
        item1: 'Arenas',
        item2: 'Limpiadores corporales',
        item3: 'Champús y Acondicionadores',
        item4: 'Cepillos'
    }, {
        title: 'Juguetería',
        icon: <Icon_Bonne />,
        item1: 'Electrónicos',
        item2: 'Juguetes',
        item3: 'Peluches',
        item4: 'Interactivos'
    }]

    const showMenuList = () => {
        if (showMenuCat || keepVisibleCat) {
            return <Options info={menuCats} setKeepVisible={setKeepVisibleCat} />
        } else if (showMenuDog || keepVisibleDog) {
            return <Options info={menuDogs} setKeepVisible={setKeepVisibleDog} />
        }
        // return <Options info={menuCats} setKeepVisible={setKeepVisibleCat} />
    }
    return (
        <div className="menu-container"
            onMouseEnter={() => { setMenuIsVisible(true) }}
            onMouseLeave={() => { setMenuIsVisible(false) }}>
            <div className='titles'>
                <Title_Menu setDog={setShowMenuDog} setCat={setShowMenuCat} onDog={keepVisibleDog} onCat={keepVisibleCat} />
            </div>
            <div className='contents'>
                {showMenuList()}
            </div>
        </div>
    )
}

export default Menu_Container