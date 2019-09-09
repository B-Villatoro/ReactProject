"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import BookActions from '../actions/bookActions';


export class BookList extends React.Component{

    createBookRow(book){
        return (
            <tr key={book.bookId}>
                <td> {book.bookId} </td>
                <td> {book.title} </td>
                <td> {book.authId} </td>
                <td> {book.pubId}</td>
                <td><button>+</button></td>
                <td><button>-</button></td>
            </tr>
        );
    }

    componentDidMount(){
        BookActions.readBooks();
    }

    render() {
        return(
            <div>
                <h1>Books<button>+</button></h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>AuthorId</th>
                            <th>PubId</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bookList.map(this.createBookRow, this)}
                    </tbody>    
                </table>
            </div>
        );
    }
}

BookList.propTypes = {
    bookList: PropTypes.array.isRequired
};



