"use strict";
import Axios from 'axios';

var AuthorApi = {

    getAllAuthors: async function(){
        return Axios.get('http://localhost:3000/author')
    
    },
    addAuthor: async function(author){
        Axios.post('http://localhost:3000/author', author)

    },
    updateAuthor: async function(author){
        Axios.put(`http://localhost:3000/author/${author.authorId}`, author)
    },
    deleteAuthor: async function(id){
        Axios.delete(`http://localhost:3000/author/${id}`)
    }
};

module.exports = AuthorApi;