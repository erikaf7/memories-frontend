import React from 'react'
import { Link } from 'react-router-dom'
import { APIURL } from '../config'

export default function EntryThumbnail({ entry }) {
    const url = `/entries/${entry._id}`
    return (
        <Link to={url}>
            <div className="card mb-2 mx-1 card-thumbnail">
                <div className="card-body">
                    <h3 className="card-title card-title-resize">{entry.title}</h3>
                    {entry.img ? <img src={entry.img} className="card-img" /> : <div></div>}
                </div>
            </div>
        </Link>
    )
}