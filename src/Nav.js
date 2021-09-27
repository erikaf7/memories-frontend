import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <h1>memories</h1>
            <Link to="/">home</Link>
            <Link to="/entries">view all entries</Link>
            <Link to="/entries/create">create entry</Link>
        </div>
    )
}