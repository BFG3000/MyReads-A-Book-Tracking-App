import { bookActions } from '../slices/bookSlice';
import { get, getAll, search, update } from '../../BooksAPI';

//// localStorage.setItem('shippingInfo', JSON.stringify(data));

export const getAllBooks = () => async (dispatch) => {
    try {
        const data = await getAll();
        dispatch(
            bookActions.getAllBooks({
                allBooks: data,
            })
        );
    } catch (error) {
        console.log(error);
    }
};
export const getBook = (id) => async (dispatch) => {
    try {
        const data = await get(id);
        dispatch(
            bookActions.getBook({
                user: data.user,
            })
        );
    } catch (error) {
        console.log(error);
    }
};
export const updateBook = (book, shelf) => async (dispatch) => {
    try {
        const data = await update(book, shelf);
        dispatch(
            bookActions.updateBook({
                user: data.user,
            })
        );
    } catch (error) {
        console.log(error);
    }
};
export const searchBooks = (keyword, maxResults) => async (dispatch) => {
    try {
        const data = await search(keyword, maxResults);
        dispatch(
            bookActions.searchBooks({
                filterdBooks: keyword && Array.isArray(data) ? data : [],
            })
        );
    } catch (error) {
        console.log(error);
    }
};

// i feel like im overcomplicating this thing
export const moveToRead = (book) => async (dispatch, getState) => {
    try {
        let newRead = [...getState().book.readBooks, book];
        dispatch(
            bookActions.moveToRead({
                readBooks: newRead,
                currentlyReadingBooks:
                    getState().book.currentlyReadingBooks.length === 0
                        ? []
                        : getState().book.currentlyReadingBooks.filter((book1) => book1.id !== book.id),
                wantToReadBooks:
                    getState().book.wantToReadBooks.length === 0
                        ? []
                        : getState().book.wantToReadBooks.filter((book1) => book1.id !== book.id),
            })
        );
        localStorage.setItem('readBooks', JSON.stringify(newRead));
        localStorage.setItem(
            'wantToReadBooks',
            JSON.stringify(
                getState().book.wantToReadBooks.length === 0
                    ? []
                    : getState().book.wantToReadBooks.filter((book1) => book1.id !== book.id)
            )
        );
        localStorage.setItem(
            'currentlyReadingBooks',
            JSON.stringify(
                getState().book.currentlyReadingBooks.length === 0
                    ? []
                    : getState().book.currentlyReadingBooks.filter((book1) => book1.id !== book.id)
            )
        );
    } catch (error) {
        console.log(error);
    }
};

export const moveToCurrentlyReading = (book) => async (dispatch, getState) => {
    try {
        let newCurrentlyReading = [...getState().book.currentlyReadingBooks, book];
        dispatch(
            bookActions.moveToCurrentlyReading({
                currentlyReadingBooks: newCurrentlyReading,
                readBooks:
                    getState().book.readBooks.length === 0
                        ? []
                        : getState().book.readBooks.filter((book1) => book1.id !== book.id),
                wantToReadBooks:
                    getState().book.wantToReadBooks.length === 0
                        ? []
                        : getState().book.wantToReadBooks.filter((book1) => book1.id !== book.id),
            })
        );
        localStorage.setItem('currentlyReadingBooks', JSON.stringify(newCurrentlyReading));
        localStorage.setItem(
            'readBooks',
            JSON.stringify(
                getState().book.readBooks.length === 0
                    ? []
                    : getState().book.readBooks.filter((book1) => book1.id !== book.id)
            )
        );
        localStorage.setItem(
            'wantToReadBooks',
            JSON.stringify(
                getState().book.wantToReadBooks.length === 0
                    ? []
                    : getState().book.wantToReadBooks.filter((book1) => book1.id !== book.id)
            )
        );
    } catch (error) {
        console.log(error);
    }
};

export const moveToWantToRead = (book) => async (dispatch, getState) => {
    try {
        let newWantToRead = [...getState().book.wantToReadBooks, book];
        dispatch(
            bookActions.moveToWantToRead({
                wantToReadBooks: newWantToRead,
                currentlyReadingBooks:
                    getState().book.currentlyReadingBooks.length === 0
                        ? []
                        : getState().book.currentlyReadingBooks.filter((book1) => book1.id !== book.id),
                readBooks:
                    getState().book.readBooks.length === 0
                        ? []
                        : getState().book.readBooks.filter((book1) => book1.id !== book.id),
            })
        );

        localStorage.setItem('wantToReadBooks', JSON.stringify(newWantToRead));
        localStorage.setItem(
            'currentlyReadingBooks',
            JSON.stringify(
                getState().book.currentlyReadingBooks.length === 0
                    ? []
                    : getState().book.currentlyReadingBooks.filter((book1) => book1.id !== book.id)
            )
        );
        localStorage.setItem(
            'readBooks',
            JSON.stringify(
                getState().book.readBooks.length === 0
                    ? []
                    : getState().book.readBooks.filter((book1) => book1.id !== book.id)
            )
        );
    } catch (error) {
        console.log(error);
    }
};
