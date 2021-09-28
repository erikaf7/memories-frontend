import React from 'react'
import { Link } from 'react-router-dom'


export default function EntryThumbnail({ entry }) {
    const url = `/entries/${entry._id}`
    return (
        <Link to={url} className="d-flex justify-content-center">
            <div className="card mb-3 mx-1 card-thumbnail justify-self-center">
                <div className="card-body d-flex flex-column justify-content-center">
                    <h3 className="card-title card-title-resize">{entry.title}</h3>
                    {entry.img ? <img src={entry.img} alt={entry.title} className="card-img" /> : <div></div>}
                </div>
            </div>
        </Link>
    )
}