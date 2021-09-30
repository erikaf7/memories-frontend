import React from 'react'
import EntryThumbnail from './EntryThumbnail'
import Nav from '../Nav';
import { APIURL } from '../config';

export default function SearchResult({ entries, searchString }) {
    searchString = searchString.toLowerCase();
    console.log(searchString)
    console.log(entries)
    const matchingEntries = entries.filter(entry => entry.title === searchString)
    console.log(matchingEntries)
    if (!matchingEntries) {
        return (
            <h2>no matches found</h2>
        )
    }

    return (
        <div className="container">
            <Nav />
            <h2>results for '{searchString}'</h2>
            <hr></hr>
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