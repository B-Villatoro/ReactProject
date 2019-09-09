"use strict";
import Axios from 'axios';

// var _update = function(item){

// };

// var _delete = function(item){

// };

var AuthorApi = {
    getAllAuthors:  function(){
        const response =  Axios.get('http:localhost:3000/author');
        // console.log(response);
        return response;
    },
    addAuthor: function(){

    },
    updateAuthor: function(){

    },
    deleteAuthor: function(){
        
    }
};

module.exports = AuthorApi;