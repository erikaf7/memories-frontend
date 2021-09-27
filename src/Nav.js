import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="navbar">
            <h1 className="nav-item">memories</h1>
            <Link to="/" className="nav-link-light">home</Link>
            <Link to="/entries" className="nav-link-light">view all entries</Link>
            <Link to="/entries/create" className="nav-link-light">create entry</Link>
        </div >
    )
}