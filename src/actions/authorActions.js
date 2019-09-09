
import AuthorApi from '../api/authorApi';
import Dispatcher from '../dispatcher/appDispatcher';

const AuthorActions = {
    authorList:[],
    readAuthors: function(){
        AuthorApi.getAllAuthors().then((response)=>{
            this.authorList = response.data;
        });
        console.log(this.authorList);

        Dispatcher.dispatch({
            actionType: 'read_authors',
            data: this.authorList
        });
    },

    addAuthor: function(author){
        AuthorApi.addAuthor(author);
        AuthorApi.getAllAuthors().then((response) => {
            this.authorList = response.data;
        })

        Dispatcher.dispatch({
            acutionType: 'add_author',
            data: this.authorList
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