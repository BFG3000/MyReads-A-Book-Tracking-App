import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../../Components/Book';
const WantToRead = () => {
    const { wantToReadBooks } = useSelector((state) => state.book);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {wantToReadBooks.map((book) => (
                        <li key={book.id}>
                            <Book data={book} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default WantToRead;
