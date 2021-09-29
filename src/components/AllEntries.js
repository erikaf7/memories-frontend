import React, { useState, useEffect } from 'react'
import EntryThumbnail from './EntryThumbnail'
import { APIURL } from '../config'
import Nav from '../Nav'
import { Link } from 'react-router-dom'

export default function AllEntries() {
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
    if (entries.length === 0) {
        return (
            <div className="container">
                <Nav />
                <h2>all memories</h2>
                <hr></hr>
                <div className="d-flex flex-column align-items-center">
                    <h2 className="my-5">No memories here yet...time to make some!</h2>
                    <img src="https://images.unsplash.com/photo-1449237386841-d30ba36cd1bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80" className="img img-fluid rounded" alt="photos arranged on a table." />
                    <Link to="/entries/create" className="my-5 btn btn-outline-light">create a new memory</Link>
                </div>
            </div>
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