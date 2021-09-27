import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EntryThumbnail from './EntryThumbnail'
const apiURL = 'http://localhost:4000/entries'
export default function AllEntries(props) {
    const [entries, setEntries] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                setEntries(data)
            })
            .catch(() => {
                setError(true)
            })
    }, [])
    if (error) {
        return (
            <div>
                <h2>Sorry, something went wrong.</h2>
            </div>
        )
    }
    return (
        <div className="container">
            <h1>all memories</h1>
            <hr></hr>
            <div className="thumbnails-container">
                {entries.map(entry => (
                    <EntryThumbnail entry={entry}></EntryThumbnail>
                ))}
            </div>
        </div>
    )
}