import React, { useState, useEffect } from 'react'
import EntryThumbnail from './EntryThumbnail'
import { APIURL } from '../config'
import Nav from '../Nav'

export default function AllEntries(props) {
    const [entries, setEntries] = useState([])
    const [error, setError] = useState(false)
    const url = `${APIURL}/entries`
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setEntries(data)
            })
            .catch(() => {
                setError(true)
            })
    }, [url])
    if (error) {
        return (
            <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>
        )
    }
    return (
        <div className="container">
            <Nav />
            <h2>all memories</h2>
            <hr></hr>
            <div className="container d-flex flex-wrap justify-content-center align-items-stretch">
                {entries.map(entry => (
                    <div key={entry._id} className="d-flex justify-content-center">
                        <EntryThumbnail entry={entry}></EntryThumbnail>
                    </div>
                ))}
            </div>
        </div>
    )
}