import "./SearchForm.css"

function SearchForm() {
    return(
        <div className="search">
            <form className="search__form">
                <div className="search__container">
                    <input className="search__input" name="search" required placeholder="Фильм" /> 
                    <button className="search__submit" type="submit"></button>
                </div>
                <div className="search__container">
                    <button className="search__filter" type="checkbox"></button>
                    <p className="search__text">Короткометражки</p>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;