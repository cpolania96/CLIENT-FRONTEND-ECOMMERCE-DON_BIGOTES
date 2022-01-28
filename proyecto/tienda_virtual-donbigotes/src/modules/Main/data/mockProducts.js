// const createLink = (nombre) => {
//     const nombreToLowerCase = nombre.toLowerCase()
//     const nombreConvert = nombreToLowerCase.normalize('NFD').replace(/[\u00C0-\u00FF]/g, '')
//     const nombreArray = nombreConvert.split(' ')
//     const link = nombreArray.join("+")
//     return link
// }

const productos = [{
    id: "1",
    photo: null,
    name: "Bálsamo Humectante y Curativo",
    photo: 'https://res.cloudinary.com/devsy44f3/image/upload/v1643168330/Products/Mesa_de_trabajo_2_l8bbxg.png',
    stars: 2,
    weight: 40,
    discount: false,
    price: new Intl.NumberFormat("de-DE").format(35000),
    priceG: (price, weight) => {
        return weight / price
    }

},
{
    id: "2",
    photo: null,
    name: "Limpiador óptico",
    photo: 'https://res.cloudinary.com/devsy44f3/image/upload/v1643168330/Products/Mesa_de_trabajo_1_gsvabd.png',
    stars: 5,
    weight: 20,
    discount: false,
    price: new Intl.NumberFormat("de-DE").format(15000),
    priceG: (price, weight) => {
        return weight / price
    }
},
{
    id: "3",
    photo: null,
    name: "Limpiador ótico",
    photo: 'https://res.cloudinary.com/devsy44f3/image/upload/v1643168330/Products/Mesa_de_trabajo_1_gsvabd.png',
    stars: 5,
    weight: 15,
    discount: false,
    price: new Intl.NumberFormat("de-DE").format(18000),
    priceG: (price, weight) => {
        return weight / price
    }
},
{
    id: "4",
    photo: null,
    name: 'Shampoo brillo natural',
    photo: 'https://res.cloudinary.com/devsy44f3/image/upload/v1643168330/Products/Mesa_de_trabajo_2_l8bbxg.png',
    stars: 5,
    weight: 150,
    discount: false,
    price: new Intl.NumberFormat("de-DE").format(35000),
    priceG: (price, weight) => {
        return weight / price
    }
},
{
    id: "5",
    photo: null,
    name: "Shampoo alivio",
    photo: 'https://res.cloudinary.com/devsy44f3/image/upload/v1643168330/Products/Mesa_de_trabajo_2_l8bbxg.png',
    stars: 5,
    weight: 150,
    discount: false,
    price: new Intl.NumberFormat("de-DE").format(35000),
    priceG: (price, weight) => {
        return weight / price
    }
},
{
    id: "4",
    photo: null,
    name: "Gel cicatrizante de aloe",
    stars: 5,
    weight: 20,
    discount: false,
    price: new Intl.NumberFormat("de-DE").format(25000),

    priceG: (price, weight) => {
        return weight / price
    }
}
]

export const getFetch = new Promise((resolve, reject) => {
    let condicion = true
    if (condicion) {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    } else {
        reject("No se ha encontrado")
    }
})