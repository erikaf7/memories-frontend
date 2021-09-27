import React from 'react'
import EntryThumbnail from './EntryThumbnail'

export default function AllEntries() {
    return (

        <div className="container">
            <h1>all memories</h1>
            <hr></hr>
            <div className="thumbnails-container">
                <EntryThumbnail />
                <EntryThumbnail />
                <EntryThumbnail />
            </div>
        </div>
    )
}