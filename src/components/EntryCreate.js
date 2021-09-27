import React from 'react'
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../config.js';
import Nav from '../Nav.js';
import EntryForm from './EntryForm.js';

export default function EntryCreate() {
    const initialEntryState = {
        title: '',
        img: '',
        description: '',
    }
    const [entry, setEntry] = useState(initialEntryState)
    const [createdId, setCreatedId] = useState(null)
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        e.persist()
        setEntry({
            ...entry,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = `${APIURL}/entries/`
        fetch(url, {
            method: 'POST',
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
            <h2>Create Entry</h2>
            {error && <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>}
            <EntryForm
                entry={entry}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}