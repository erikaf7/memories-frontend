import React from 'react'

export default function EntryForm({ entry, handleSubmit, handleChange }) {
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title" className="form-label">title</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="give this memory a title..."
                    value={entry.title}
                    name="title"
                    onChange={handleChange}
                    required
                    id="title"
                />

                <label htmlFor="img" className="form-label">image url</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="paste your image url here..."
                    value={entry.img}
                    name="img"
                    onChange={handleChange}
                    id="img"
                />

                <label htmlFor="description" className="form-label">description</label>
                <input
                    type="textarea"
                    className="form-control mb-3"
                    placeholder="describe this memory..."
                    value={entry.description}
                    name="description"
                    onChange={handleChange}
                    required
                    id="description"
                />
                <button className="btn btn-secondary" type="submit">submit</button>
            </form>
        </div>
    )
}