import { getFetch } from '../Main/data/mockProducts'

function ItemListContainer() {
   getFetch
   .then(resp => {console.log(resp)})
   .catch(err => {console.log(err)})
}

export default ItemListContainer
