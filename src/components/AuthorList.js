"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import AuthorActions from '../actions/authorActions';
import {AuthorModal} from '../components/AuthorModal';
import {AuthorUpdateModal} from '../components/AuthorUpdateModal';
import {Button} from "react-bootstrap"



export class AuthorList extends React.Component {

    createAuthorRow(author) {
        return (
            <tr key={author.authorId}>
                <td>{author.authorId}</td>
                <td>{author.authorName}</td>
                <td><AuthorUpdateModal authorId={author.authorId}></AuthorUpdateModal></td>
                <td><Button onClick={() => this._handleClick(author.authorId)}>Delete</Button></td>
            </tr>
        );
    }

    _handleClick(id) {
        console.log(id);
        AuthorActions.deleteAuthor(id);
    }
    _handleUpdate(){
        
    }

    componentDidMount() {
        AuthorActions.readAuthors();
    }

    componentDidUpdate() {
        AuthorActions.readAuthors();
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorModal></AuthorModal>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authorList.map(this.createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

AuthorList.propTypes = {
    authorList: PropTypes.array.isRequired
};