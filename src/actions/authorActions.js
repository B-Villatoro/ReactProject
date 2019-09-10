
import AuthorApi from '../api/authorApi';
import Dispatcher from '../dispatcher/appDispatcher';

const AuthorActions = {
    authorList:[],
    readAuthors: async function(){
        AuthorApi.getAllAuthors().then((response)=>{
            Dispatcher.dispatch({
                actionType: 'read_authors',
                data: response.data
            });
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

    updateAuthor: function(author){
        AuthorApi.updateAuthor(author);
        AuthorApi.getAllAuthors().then((response) => {
            this.authorList = response.data;

            Dispatcher.dispatch({
                acutionType: 'update_author',
                data: this.authorList
            });
        })

        
    },

    deleteAuthor: async function(id){
        //console.log(id);
        AuthorApi.deleteAuthor(id);
        AuthorApi.getAllAuthors().then((response) => {
            this.authorList = response.data;
            Dispatcher.dispatch({
                actionType: 'delete_author',
                data: this.authorList
            });
        })
        
    }
}

module.exports = AuthorActions;