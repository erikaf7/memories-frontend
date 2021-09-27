import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
    return (
        <div className="container">
            <h1>memories</h1>
            <h2>you create the story</h2>
            <hr></hr>
            <Link to="/entries">view entries</Link>
            <br />
            <Link to="/entries/create">create entry</Link>
            <br />
        </div>
    )
}