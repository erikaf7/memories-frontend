import React from 'react'
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../config';
import EntryForm from './EntryForm';
import Nav from '../Nav';

export default function EntryEdit({ match }) {
    const [entry, setEntry] = useState(null)
    const [createdId, setCreatedId] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const url = `${APIURL}/entries/${match.params.id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setEntry({ title: data.title, img: data.img, description: data.description })
            })
            .catch(() => {
                setError(true)
            })
    }, [match.params.id])

    const handleChange = (e) => {
        e.persist()
        setEntry({
            ...entry,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = `${APIURL}/entries/${match.params.id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(entry)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedId(data._id)
            })
            .catch(() => {
                setError(true)
            })
    }

    if (createdId) {
        return <Redirect to={`/entries/${createdId}`} />
    }

    return (
        <div className="container">
            <Nav />
            <div className="container d-flex align-items-center justify-content-center my-5">
                <div className="card align-self-center">
                    <div className="row g-0">
                        <div className="col-md-6">
                            {entry && entry.img ? <img src={entry.img} className="img-fluid rounded-start" /> : <img src="https://images.unsplash.com/photo-1595981234058-a9302fb97229?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="img-fluid rounded-start" />}
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 className="card-title">edit this entry</h1>
                                {error && <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>}
                                {entry && (
                                    <EntryForm
                                        entry={entry}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>

        // <div className="container">
        //     <Nav />
        //     <h2>edit memory</h2>
        //     {error && <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>}
        //     {entry && (
        //         <EntryForm
        //             entry={entry}
        //             handleChange={handleChange}
        //             handleSubmit={handleSubmit}
        //         />
        //     )}
        // </div>
    )
}