import React from 'react'

export default function EntryForm({ entry, handleSubmit, handleChange }) {
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">title</label>
                <input
                    placeholder="give this memory a title..."
                    value={entry.title}
                    name="title"
                    onChange={handleChange}
                    required
                    id="title"
                />

                <label htmlFor="img">image url</label>
                <input
                    placeholder="paste your image url here..."
                    value={entry.img}
                    name="img"
                    onChange={handleChange}
                    id="img"
                />

                <label htmlFor="description">description</label>
                <input
                    placeholder="describe this memory..."
                    value={entry.description}
                    name="description"
                    onChange={handleChange}
                    required
                    id="description"
                />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}