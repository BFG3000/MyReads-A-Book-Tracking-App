import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../../Components/Book';
const Read = () => {
    const { readBooks } = useSelector((state) => state.book);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {readBooks.map((book) => (
                        <li key={book.id}>
                            <Book data={book} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Read;
