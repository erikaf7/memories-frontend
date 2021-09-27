import React from 'react'
import { Link } from 'react-router-dom'
import { APIURL } from '../config'

export default function EntryThumbnail({ entry }) {
    const url = `/entries/${entry._id}`
    return (
        <Link to={url}>
            <div>
                <h3>{entry.title}</h3>
                <img src={entry.img} />
            </div>
        </Link>
    )
}