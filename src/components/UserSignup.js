import React from 'react'
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../config.js';
import Nav from '../Nav.js';


export default function UserSignup() { 
    const initialUserState = {
        username: '',
        password: '',
    }
    const [user, setUser] = useState(initialUserState)
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        e.persist()
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

    }

    return (
        <div className="container">
            <Nav />
            <h2>Sign up</h2>
            {error && <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>}
            <div className="container">
            <form onSubmit= {handleSubmit}>
                <label htmlFor="username" className="form-label">username</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="choose a username..."
                    value={user.username}
                    name="username"
                    onChange={handleChange}
                    required
                    id="username"
                />

                <label htmlFor="password" className="form-label">password</label>
                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="create a password..."
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                    required
                    id="password"
                />
                <button className="btn btn-secondary" type="submit">create account</button>
            </form>
        </div>
        </div>
    )

}