
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
        Dispatcher.dispatch({
            acutionType: 'add_author',
            data: author
        });
    },

    updateAuthor: function(author){
        AuthorApi.updateAuthor(author);
            Dispatcher.dispatch({
                acutionType: 'update_author',
                data: author
            });

        
    },

    deleteAuthor: async function(id){
        //console.log(id);
        AuthorApi.deleteAuthor(id);
          
            Dispatcher.dispatch({
                actionType: 'delete_author',
                data: id
        })
        
    }
}

module.exports = AuthorActions;