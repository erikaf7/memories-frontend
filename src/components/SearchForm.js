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
        <div className="container mt-3">
            <form onSubmit={e => handleSubmit(e)}>
                <div className="row">
                    <div className="col-sm-8">
                        <input
                            className="form-control mb-3" type="text" value={waitSearchString} placeholder='Search for a memory...' onChange={e => handleChange(e)} id="search-input">
                        </input>
                    </div>
                    <div className="col-sm-4">
                        <button className="btn btn-secondary hover-effect" type="submit"
                            onClick={e => handleSubmit(e)}>search
                        </button>
                    </div>
                </div>
            </form>
        </div>


    )
}