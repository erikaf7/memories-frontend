import React, {useContext} from 'react'
import { useState } from 'react';
import Nav from '../Nav.js';
import { login } from '../utils/login.js';
import { UserContext } from './UserContext';


export default function UserSignin() { 
    const {user, setUser} = useContext(UserContext);
    const [error, setError] = useState(false)

    return (
        <div className="container">
            <Nav />
            <h2>Sign in</h2>
            {error && <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>}
            <div className="container">
            <form>
                <label htmlFor="username" className="form-label">username</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="enter your username..."
                    name="username"
                    required
                    id="username"
                />

                <label htmlFor="password" className="form-label">password</label>
                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="enter your password..."
                    name="password"
                    required
                    id="password"
                    />
                <pre>{JSON.stringify(user, null, 2)}</pre>
                <button onClick = {async () => {
                    const user = await login()
                    setUser(user)
                }} className="btn btn-secondary">sign in</button>
            </form>
            </div>


        
        </div>
    )

}