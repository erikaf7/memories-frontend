import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav flex-column mt-3 align-items-end">
            <Link to="/" className="nav-item nav-link-light nav-item-custom">
                <h1>memories</h1>
            </Link>
            <Link to="/entries" className="nav-item nav-link-light nav-item-custom">view all entries</Link>
            <Link to="/entries/create" className="nav-item nav-link-light nav-item-custom">create entry</Link>
            <Link to="/signup" className="nav-item nav-link-light nav-item-custom">sign up</Link>
            <Link to="/signin" className="nav-item nav-link-light nav-item-custom">sign in</Link> 
        </div >

    )
}