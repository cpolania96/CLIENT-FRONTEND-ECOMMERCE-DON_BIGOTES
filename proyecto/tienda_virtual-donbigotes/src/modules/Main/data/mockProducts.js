

const productos = [
    {
        id: 1,
        photo: null,
        name: "Bálsamo Humectante y Curativo",
        stars: 2,
        weight: 40,
        discount: false,
        price: 35000,
        priceG: (price, weight) => {
            return weight / price
        }
    },
    {
        id: 2,
        photo: null,
        name: "Limpiador óptico",
        stars: 5,
        weight: 20,
        discount: false,
        price: 15000,
        priceG: (price, weight) => {
            return weight / price
        }
    },
    {
        id: 3,
        photo: null,
        name: "Limpiador ótico",
        stars: 5,
        weight: 15,
        discount: false,
        price: 18000,
        priceG: (price, weight) => {
            return weight / price
        }
    }]

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