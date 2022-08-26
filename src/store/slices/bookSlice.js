import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        allBooks: [],
        selectedBook: {
            title: '',
            subtitle: '',
            authors: [''],
            publisher: '',
            publishedDate: '',
            description: '',
            industryIdentifiers: [
                {
                    type: '',
                    identifier: '',
                },
            ],
            readingModes: {
                text: true,
                image: false,
            },
            pageCount: 0,
            printType: '',
            categories: [''],
            averageRating: 0,
            ratingsCount: 0,
            maturityRating: '',
            allowAnonLogging: true,
            contentVersion: '',
            panelizationSummary: {
                containsEpubBubbles: false,
                containsImageBubbles: false,
            },
            imageLinks: {
                smallThumbnail: '',
                thumbnail: '',
            },
            language: '',
            previewLink: '',
            infoLink: '',
            canonicalVolumeLink: '',
            id: '',
            shelf: '',
        },
        
        readBooks: localStorage.getItem('readBooks') ? JSON.parse(localStorage.getItem('readBooks')) : [],
        wantToReadBooks: localStorage.getItem('wantToReadBooks') ? JSON.parse(localStorage.getItem('wantToReadBooks')) : [],
        currentlyReadingBooks: localStorage.getItem('currentlyReadingBooks') ? JSON.parse(localStorage.getItem('currentlyReadingBooks')) : [],
        filterdBooks: [],
    },
    reducers: {
        getAllBooks(state, action) {
            state.allBooks = action.payload.allBooks;
        },
        getBook(state, action) {
            state.selectedBook = action.payload.selectedBook;
        },
        moveToRead(state, action) {
            state.readBooks = action.payload.readBooks;
            state.currentlyReadingBooks = action.payload.currentlyReadingBooks;
            state.wantToReadBooks = action.payload.wantToReadBooks;
        },
        moveToCurrentlyReading(state, action) {
            state.currentlyReadingBooks = action.payload.currentlyReadingBooks;
            state.wantToReadBooks = action.payload.wantToReadBooks;
            state.readBooks = action.payload.readBooks;
        },
        moveToWantToRead(state, action) {
            state.wantToReadBooks = action.payload.wantToReadBooks;
            state.currentlyReadingBooks = action.payload.currentlyReadingBooks;
            state.readBooks = action.payload.readBooks;
        },
        updateBook(state, action) {
            state.readBooks = action.payload.readBooks;
        },
        searchBooks(state, action) {
            state.filterdBooks = action.payload.filterdBooks;
        },
    },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
