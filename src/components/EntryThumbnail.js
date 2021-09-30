import React from 'react'
import { Link } from 'react-router-dom'


export default function EntryThumbnail({ entry }) {
    const url = `/entries/${entry._id}`
    return (
        <Link to={url} className="d-flex justify-content-center card-thumbnail">
            <div className="card mb-3 mx-2 justify-self-center">
                <div className="card-body d-flex flex-column justify-content-center hover-effect">
                    <h3 className="card-title card-title-resize">{entry.title.toLowerCase()}</h3>
                    {entry.img ? <img src={entry.img} alt={entry.title} className="card-img img-fluid" /> : <div></div>}
                </div>
            </div>
        </Link>
    )
}