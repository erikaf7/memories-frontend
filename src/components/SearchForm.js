import React, { useState } from "react"

export default function SearchForm({ searchString, setSearchString }) {
    const [waitSearchString, setWaitSearchString] = useState('')

    function handleChange(e) {
        setWaitSearchString(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        setSearchString(waitSearchString)
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input
                type="text" value={waitSearchString} placeholder='Search for a post...' onChange={e => handleChange(e)} id="search-input">

            </input>
            <button
                onClick={e => handleSubmit(e)}>
            </button>
        </form>

    )
}