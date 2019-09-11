"use strict"

import React from 'react';
// import PropTypes from 'prop-types';
import BookActions from "../actions/bookActions";
import { Modal, Button, Form } from "react-bootstrap"

export class BookModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            bookId: "",
            title: "",
            authId: "",
            pubId: ""
        }
    }
    _handleForm(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    _handleSubmit() {
        let book = {
            bookId: this.state.bookId,
            title: this.state.title,
            authId: this.state.authId,
            pubId: this.state.pubId
        }
        BookActions.addBook(book);
        this._handleClose();
    }

    _handleClose() {
        this.setState({ show: false })
    }
    _handleShow() {
        this.setState({ show: true })
    }
    _handleAddBook(book) {
        BookActions.addBook(book)
    }

    render() {
        return (
            <div>
                <Button variant="primary" onClick={() => this._handleShow()}>
                    Add new book
                </Button>

                <Modal animation={false} show={this.state.show} onHide={() => this._handleClose()}>

                    <Modal.Header closeButton>
                        <Modal.Title>Add New Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBookId">
                                <Form.Label>Book Id</Form.Label>
                                <Form.Control onChange={(e) => this._handleForm(e)} name="bookId" type="text" placeholder="Enter book id" required />
                            </Form.Group>

                            <Form.Group controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control onChange={(e) => this._handleForm(e)} name="title" type="text" placeholder="Enter title" />
                            </Form.Group>

                            <Form.Group controlId="formAuthorId">
                                <Form.Label>Author Id</Form.Label>
                                <Form.Control onChange={(e) => this._handleForm(e)} name="authId" type="text" placeholder="Enter author id" />
                            </Form.Group>

                            <Form.Group controlId="formPublisherId">
                                <Form.Label>Publisher Id</Form.Label>
                                <Form.Control onChange={(e) => this._handleForm(e)} name="pubId" type="text" placeholder="Enter publisher id" />
                            </Form.Group>

                            <Button variant="primary" onClick={() => { this._handleSubmit() }}>
                                Submit
                                </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

}

// BookModal.propTypes = {
//     bookModal: PropTypes.bool,
//     handleClick: PropTypes.object
// };




