import React from 'react'
import EntryThumbnail from './EntryThumbnail'
import Header from './Header';
import { Link } from 'react-router-dom';

export default function SearchResult({ entries, searchString, setSearchString }) {
    searchString = searchString.toLowerCase();
    const matchingEntries = entries.filter(entry => entry.title.toLowerCase() === searchString)
    if (matchingEntries.length === 0) {
        return (
            <div className="container">
                <Header entries={entries} searchString={searchString} setSearchString={setSearchString} />
                <div className="d-flex flex-column align-items-center">
                    <h2 className="my-3">No matches for '{searchString}.'' Why not create your own?</h2>
                    <Link to="/entries/create" className="my-5 btn btn-outline-light">create a new memory</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <Header entries={entries} searchString={searchString} setSearchString={setSearchString} searchEnabled="false" />
            <h2 className="my-2">results for '{searchString}'</h2>
            <div className="container d-flex flex-wrap justify-content-center align-items-stretch">
                {matchingEntries.map(entry => (
                    <div key={entry._id} className="d-flex justify-content-center">
                        <EntryThumbnail entry={entry}></EntryThumbnail>
                    </div>
                ))}
            </div>
        </div>
    )

}