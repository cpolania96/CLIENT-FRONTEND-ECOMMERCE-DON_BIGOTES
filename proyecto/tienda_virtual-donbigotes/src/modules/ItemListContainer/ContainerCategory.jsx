import ItemListContainer from './ItemListContainer'

function ContainerCategory() {

    return (
        <main>
            <div className="container-content container-detail" id='container-category'>
                <h6 className='title'>Title</h6>
                <div className="container-items">
                    <ItemListContainer />
                </div>
            </div>
        </main>
    )
}

export default ContainerCategory
