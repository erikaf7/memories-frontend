import React from 'react'
import Nav from '../Nav'
import SearchForm from './SearchForm'

export default function Header({ searchString, setSearchString, entries, searchEnabled }) {
    if (searchEnabled === 'false') {
        return (
            <div>
                <div className="container">
                    <div className="row d-flex align-items-end mt-5">
                        <div className="col-sm-6">
                            <Nav />
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-end mt-5">
                    <div className="col-sm-6">
                        <Nav />
                    </div>
                    <div className="col-sm-6">
                        <SearchForm searchString={searchString} setSearchString={setSearchString} entries={entries} />
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}