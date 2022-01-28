import SearchIco from "../svg/icon-search";

const Search = () => {
    return (
        <div class="search">
            <input type="text" placeholder="Buscar" />
            <button>
                <SearchIco />
            </button>
        </div>
    )
}
export default Search;