import React from 'react';
import { Link } from 'react-router-dom';
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';
import WantToRead from './WantToRead';

const Home = () => {
    return (
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <CurrentlyReading />
                        <WantToRead />
                        <Read />
                    </div>
                </div>
                <div className="open-search">
                    <Link to={'/search'}>Add a book</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
