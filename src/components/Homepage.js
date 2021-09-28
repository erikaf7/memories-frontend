import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
    return (
        <div className="container vh-100 d-flex align-items-center">
            <div className="card align-self-center">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://images.unsplash.com/photo-1535837487710-a191373a20ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80" alt="" className="img-fluid rounded-start"></img>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h1 className="card-title">memories</h1>
                            <h3 className="card-text mt-5">you create the story.</h3>
                            <div className="btn-group mt-5">
                                <Link to="/entries" className="btn btn-outline-secondary">view entries</Link>
                                <Link to="/entries/create" className="btn btn-outline-secondary">create entry</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}