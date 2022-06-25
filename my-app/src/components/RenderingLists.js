import React from 'react'
import Book from './Book'


function RenderingLists() {
    const bookList = [
        "To Kill A Mockinbird",
        "The Great Gatsby",
        "The Catcher In The Rye"
    ]

    const books = [
        {
            title: "To Kill A Mockinbird",
            author: "Harper, Lee",
            pages: 281,
        },
        {
            title: "The Great Gatsby",
            author: "f, Scott, Fitzgerald",
            pages: 218,
        },
        {
            title: "The Catcher In The Rye",
            author: "J. D. Salinger",
            pages: 234,
        },
    ]

    return (
        <div>
            {
                bookList.map(book => {
                    return <h2 key={book}>{book}</h2>
                })
            }
            <hr />
            {
                books.map(book => {
                    return
                    <div key={book.title}>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                })
            }
            <hr />
            {
                books.map(book => {
                    return <Book book={book} key={book.title} />
                })

            }

        </div>

    )
}

export default RenderingLists