import React from "react";
import "./SearchForm.css"
import { KEY_WORDS_ERR, MOVIES_PATH } from "../../../utils/constants";

function SearchForm(props) {
    const [formValue, setFormValue] = React.useState({searchValue: ""})
    const [filter, setFilter] = React.useState(false)
    const [isDisabled, setIsDisabled] = React.useState(false)
    const [errMessage, setErrMessage] = React.useState("")

    function handleChange(evt) {
        const {name, value} = evt.target
        setFormValue({...formValue, [name]: value})
    }

    React.useEffect(() => {
        if (MOVIES_PATH) {
            if (!localStorage.search) {
                setIsDisabled(true)
            }
            setFormValue({searchValue: localStorage.search ?? ""})
            const isChecked = localStorage.filter === "true" ? true : false
            setFilter(isChecked)
        }
        setErrMessage(props.errMessage)
    }, [])

    function handleSubmit(evt) {
        if ((formValue.searchValue === "") && MOVIES_PATH) {
            setErrMessage(KEY_WORDS_ERR)
        } else {
            evt.preventDefault()
            if (evt.target.className === "search__checkbox") {
                setTimeout(setFilter, 100, !filter)
                props.onSubmit(formValue.searchValue, !filter)
                if (MOVIES_PATH) {
                    localStorage.setItem("filter", !filter)
                    localStorage.setItem("search", formValue.searchValue)
                }
            } else {
                props.onSubmit(formValue.searchValue, filter)
                if (MOVIES_PATH) {
                    localStorage.setItem("filter", filter)
                    localStorage.setItem("search", formValue.searchValue)
                }
            }
            setIsDisabled(false)
            setErrMessage("")
        }
    }
    
    return(
        <section className="search">
            <form className="search__form">
                <div className="search__container">
                    <input className="search__input" name="searchValue" value={formValue.searchValue} onChange={handleChange} required placeholder="Фильм" /> 
                    <button className="search__submit" type="submit" onClick={handleSubmit}></button>
                    <span className="search__input-error">{errMessage}</span>
                </div>
                <div className="search__container">
                    <input className="search__checkbox" id="shorts" checked={filter ? true : false} disabled={isDisabled && MOVIES_PATH ? true : false} 
                    onChange={handleSubmit} type="checkbox" value="button" />
                    <label htmlFor="shorts" className="search__text">Короткометражки</label>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;