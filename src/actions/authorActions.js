
import AuthorApi from '../api/authorApi';
import Dispatcher from '../dispatcher/appDispatcher';

const AuthorActions = {
    readAuthors: function(){
        const authorList = AuthorApi.getAllAuthors();

        Dispatcher.dispatch({
            actionType: 'read_authors',
            data: authorList
        });
    },

    addAuthor: function(author){
        const authorList = AuthorApi.addAuthor(author);

        Dispatcher.dispatch({
            acutionType: 'add_author',
            data: authorList
        });
    },

    updateAuthor: function(){
        const authorList = AuthorApi.updateAuthor();

        Dispatcher.dispatch({
            acutionType: 'update_author',
            data: authorList
        });
    },

    deleteAuthor: function(){
        const author = AuthorApi.deleteAuthor();

        Dispatcher.dispatch({
            actionType: 'delete_author',
            data: author
        });
    }
}

module.exports = AuthorActions;