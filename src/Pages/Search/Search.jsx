import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Book from '../../Components/Book';
import { getAllBooks, searchBooks } from '../../store/actions/bookActions';

const Search = () => {
    const dispatch = useDispatch();

    const { allBooks, filterdBooks } = useSelector((state) => state.book);

    const [searchString, setSearchString] = useState('');
    console.log('filterdBooks: ', filterdBooks);
    useEffect(() => {
        dispatch(getAllBooks());
    }, [dispatch]);

    const handleSearch = (search) => {
        setSearchString(search);
        dispatch(searchBooks(search, 10));
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to={'/'} className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(e) => handleSearch(e.target.value)}
                        value={searchString}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchString.length === 0 ? (
                        allBooks.map((book) => (
                            <li key={book.id}>
                                <Book data={book} />
                            </li>
                        ))
                    ) : (
                        <>
                            {filterdBooks && filterdBooks.length !== 0 ? (
                                filterdBooks.map((book) => (
                                    <li key={book.id}>
                                        <Book data={book} />
                                    </li>
                                ))
                            ) : (
                                <div style={{ textAlign: 'center' }}>No Results Found</div>
                            )}
                        </>
                    )}
                </ol>
            </div>
        </div>
    );
};

export default Search;
