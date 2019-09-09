"use strict";

import axios from "axios";
var BookApi = {
	getAllBooks: async function () {
		return axios.get("http://localhost:3000/book");
	},
	addBook: async function (book) {
		axios.post("http://localhost:3000/book", book);
	},
	updateBook: async function(book){
		axios.put(`http://localhost:3000/book/${book.id}`,book)
	},
	deleteBook:async function(id){
		axios.delete(`http://localhost:3000/book/${id}`)
	}
};

module.exports = BookApi;