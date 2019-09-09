
import BookApi from '../api/bookApi';
import Dispatcher from '../dispatcher/appDispatcher';
//Here add all crud actions for Books
const BooksActions = {
    readBooks: function () {
        BookApi.getAllBooks().then(response => {
            Dispatcher.dispatch({
                actionType: 'read_books',
                data: response.data
            })
        });
    },
    addBook: function (book) {
        BookApi.addBook(book)
        BookApi.getAllBooks().then(response => {
            Dispatcher.dispatch({
                actionType: 'book_added',
                data: response.data
            });
        });
    }
}

module.exports = BooksActions;