import React from 'react'
import { Link } from 'react-router-dom'
import { APIURL } from '../config'

export default function EntryThumbnail({ entry }) {
    const url = `/entries/${entry._id}`
    return (
        <Link to={url}>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{entry.title}</h3>
                </div>
                {entry.img ? <img src={entry.img} /> : <div></div>}
            </div>
        </Link>
    )
}