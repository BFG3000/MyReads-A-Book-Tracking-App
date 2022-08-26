import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../../Components/Book';
const CurrentlyReading = () => {
    const { currentlyReadingBooks } = useSelector((state) => state.book);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {currentlyReadingBooks.map((book) => (
                        <li key={book.id}>
                            <Book data={book} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default CurrentlyReading;
