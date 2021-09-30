import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav flex-column align-items-start">
            <Link to="/" className="nav-item nav-link-light nav-item-custom">
                <h1>memories</h1>
            </Link>
            <Link to="/entries" className="nav-item nav-link-light nav-item-custom">view all memories</Link>
            <Link to="/entries/create" className="nav-item nav-link-light nav-item-custom">create memory</Link>
        </div >

    )
}