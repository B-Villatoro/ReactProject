"use strict";
import Axios from 'axios';

// var _clone = function(item) {
//     console.log(JSON.parse(JSON.stringify(item)));
// 	return JSON.parse(JSON.stringify(item)); // pass by value
// };

// var _update = function(item){

// };

// var _delete = function(item){

// };

var AuthorApi = {
    getAllAuthors: async function(){
        return Axios.get('http://localhost:3000/author')
        
        
    },
    addAuthor: function(author){
        Axios.post('http://localhost:3000/author', author)

    },
    updateAuthor: function(){

    },
    deleteAuthor: function(){
        
    }
};

module.exports = AuthorApi;