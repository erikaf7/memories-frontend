import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { APIURL } from '../config'
import Nav from '../Nav'

export default function EntryDetail({ match }) {
    const [deleted, setDeleted] = useState(false)
    const [error, setError] = useState(false)
    const [entry, setEntry] = useState(null)

    const onDeleteEntry = (e) => {
        const url = `${APIURL}/entries/${match.params.id}`
        fetch(url, { method: 'DELETE' })
            .then(res => { setDeleted(true) })
            .catch(console.error)
    }

    useEffect(() => {
        const url = `${APIURL}/entries/${match.params.id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setEntry(data))
            .catch(() => {
                setError(true)
            })
    }, [match.params.id])

    if (deleted) {
        return <Redirect to="/entries"></Redirect>
    }

    if (error) {
        return (
            <div><h2>Sorry, something went wrong.</h2></div>
        )
    }

    if (!entry) {
        return (
            <div>
                <h3>Loading, please wait...</h3>
            </div>
        )
    }

    return (
        <div className="container">
            <Nav />
            <div className="container d-flex flex-wrap justify-content-center mt-5">
                <div className="card card-detail mb-3">
                    {entry.img ? <img src={entry.img} /> : <div></div>}
                    <div className="card-body">
                        <h1 className="card-title">{entry.title}</h1>
                        <p className="card-text">{entry.description}</p>
                    </div>
                    <div className="btn-group">
                        <Link to={`/entries/${match.params.id}/edit`} className="btn btn-light">edit</Link>
                        <button className="btn btn-secondary" onClick={onDeleteEntry}>delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}