import "./SearchForm.css"

function SearchForm() {
    return(
        <section className="search">
            <form className="search__form">
                <div className="search__container">
                    <input className="search__input" name="search" required placeholder="Фильм" /> 
                    <button className="search__submit" type="submit"></button>
                </div>
                <div className="search__container">
                    <input className="search__checkbox" id="shorts" type="checkbox" value="button" />
                    <label for="shorts" className="search__text">Короткометражки</label>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;