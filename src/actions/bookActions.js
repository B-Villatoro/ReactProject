
import BookApi from '../api/bookApi';
import Dispatcher from '../dispatcher/appDispatcher';
//Here add all crud actions for Books
const BooksActions = {
    bookList: [],
    readBooks: function () {
        BookApi.getAllBooks().then((response) => {
            this.bookList = response.data
            //   console.log(this.bookList,"bookActions");
        });
        Dispatcher.dispatch({
            actionType: 'read_books',
            data: this.bookList
        });
    },
    addBook: function (book) {
        BookApi.addBook(book)
        BookApi.getAllBooks().then((response) => {
            this.bookList = response.data
        });
        Dispatcher.dispatch({
            actionType: 'book_added',
            data: this.bookList
        });

    }
}

module.exports = BooksActions;