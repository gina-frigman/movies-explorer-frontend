import React from "react";
import "./SearchForm.css"
import { KEY_WORDS_ERR } from "../../../utils/constants";

function SearchForm(props) {
    const [formValue, setFormValue] = React.useState({searchValue: ""})
    const [filter, setFilter] = React.useState(false)
    const [likedFormValue, setLikedFormValue] = React.useState({searchValue: ""})
    const [likedFilter, setLikedFilter] = React.useState(false)

    const [isDisabled, setIsDisabled] = React.useState(false)
    const [errMessage, setErrMessage] = React.useState("")

    function handleChange(evt) {
        const {name, value} = evt.target
        if (props.moviespath) {
            setFormValue({...formValue, [name]: value})
        } else {
            setLikedFormValue({...likedFormValue, [name]: value})
        }
    }

    React.useEffect(() => {
        if (props.moviespath) {
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
        evt.preventDefault()
        if (props.moviespath) {
            if ((formValue.searchValue === "")) {
                setErrMessage(KEY_WORDS_ERR)
            } else {
                if (evt.target.className === "search__checkbox") {
                    setTimeout(setFilter, 100, !filter)
                    props.onSubmit(formValue.searchValue, !filter)
                } else {
                    props.onSubmit(formValue.searchValue, filter)
                }                
                localStorage.setItem("filter", !filter)
                localStorage.setItem("search", formValue.searchValue)
            }
        } else {
            if (evt.target.className === "search__checkbox") {
                setTimeout(setLikedFilter, 100, !likedFilter)
                props.onSubmit(likedFormValue.searchValue, !likedFilter)
            } else {
                props.onSubmit(likedFormValue.searchValue, likedFilter)
            }
        }
            setIsDisabled(false)
            setErrMessage("")
        }
    
    return(
        <section className="search">
            <form className="search__form">
                <div className="search__container">
                    <input className="search__input" name="searchValue" value={ props.moviespath ? formValue.searchValue : likedFormValue.searchValue} 
                    onChange={handleChange} required placeholder="Фильм" /> 
                    <button className="search__submit" type="submit" onClick={handleSubmit}></button>
                    <span className="search__input-error">{errMessage}</span>
                </div>
                <div className="search__container">
                    <input className="search__checkbox" id="shorts" checked={props.moviespath ? filter ? true : false : likedFilter ? true : false} 
                    disabled={isDisabled && props.moviespath ? true : false} onChange={handleSubmit} type="checkbox" value="button" />
                    <label htmlFor="shorts" className="search__text">Короткометражки</label>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;