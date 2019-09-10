"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import BookActions from '../actions/bookActions';
import {BookModal} from "../components/BookModal";
import {BookUpdateModal} from "../components/BookUpdateModal";
import {Button} from "react-bootstrap"

export class BookList extends React.Component {

    createBookRow(book) {
        return (
            <tr key={book.bookId}>
                <td> {book.bookId} </td>
                <td> {book.title} </td>
                <td> {book.authId} </td>
                <td> {book.pubId}</td>
                <td><BookUpdateModal bookId={book.bookId}>Update</BookUpdateModal></td>
                <td><Button onClick={() => BookActions.deleteBook(book.bookId)} >Delete</Button></td>
            </tr>
        );
    }

    _handleUpdateBook(bookId){
        console.log(bookId);
    }

    componentDidMount() {
        BookActions.readBooks();
    }
    componentDidUpdate() {
        BookActions.readBooks();
    }

    render() {
        return (
            <div>
                <h1>Books</h1>

                <BookModal></BookModal>

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
    bookList: PropTypes.array.isRequired,
    bookModal: PropTypes.bool,
    handleClick: PropTypes.object
};




