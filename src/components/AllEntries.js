import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EntryThumbnail from './EntryThumbnail'
import { APIURL } from '../config'

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