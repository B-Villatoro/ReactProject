"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import AuthorActions from '../actions/authorActions';

export class AuthorList extends React.Component{

    createAuthorRow(author){
        return (
            <tr key={author.authorId}>
                <td>{author.authorId}</td>
                <td>{author.authorName}</td>
            </tr>
        );
    }

    componentDidMount(){
        AuthorActions.readAuthors();
    }

    render(){
        return(
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
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