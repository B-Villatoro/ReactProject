"use strict";

// var books = require('./bookModel').books;
import axios from "axios";

// var _clone = function(item) {
// 	return JSON.parse(JSON.stringify(item)); // pass by value
// };
var BookApi = {
	getAllBooks: function () {
		return axios.get("http://localhost:3000/book");
	},
	addBook: function (book) {
		axios.post("http://localhost:3000/book", book);
	}
	// let data;
	// axios.get("http://localhost:3000/book")
	// .then(async (res) => {
	// 	data = await res.data;
	// 	console.log(data,"bookapi");
	// });
	// console.log(data,"before return");
	// return  data;
	// return(_clone(books))
	//Add the rest of the  CRUD operation here
};

module.exports = BookApi;