import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { APIURL } from '../config'
import Header from './Header'

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
            <div className="container vh-100 d-flex align-items-center justify-content-center">
                <div className="loading">
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <Header searchEnabled="false" />
            <div className="container my-5 d-flex align-items-center justify-content-center">
                <div className="card">
                    <div className="row g-0">
                        {entry.img ? <div className="col-sm-8 d-flex"><img src={entry.img} alt={entry.title} className="img-fluid rounded-start" /></div> : <div></div>}
                        <div className="col-sm-4 d-flex">
                            <div className="card-body d-flex flex-column justify-content-around align-items-stretch">
                                <h1 className="card-title entry-title">{entry.title.toLowerCase()}</h1>
                                <p className="card-text mt-5 entry-text">{entry.description}</p>
                                <div className="btn-group mt-5">
                                    <Link to={`/entries/${match.params.id}/edit`} className="btn btn-outline-secondary">edit</Link>
                                    <button className="btn btn-outline-secondary" onClick={onDeleteEntry}>delete</button>
                                    <Link to='/entries' className="btn btn-outline-secondary hover-effect">back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}