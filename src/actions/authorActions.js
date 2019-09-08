
import AuthorApi from '../api/authorApi';
import Dispatcher from '../dispatcher/appDispatcher';

const AuthorActions = {
    readAuthors: function(){
        const authorList = AuthorApi.getAllAuthors();

        Dispatcher.dispatch({
            actionType: 'read_authors',
            data: authorList
        });
    }
}

module.exports = AuthorActions;