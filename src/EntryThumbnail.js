import React from 'react'
import { Link } from 'react-router-dom'
const apiURL = 'http://localhost:4000/entries'

export default function EntryThumbnail({ entry }) {
    const url = entry._id
    return (
        <Link to={url}>
            <div>
                <h3>{entry.title}</h3>
                <img src={entry.img} />
            </div>
        </Link>
    )
}