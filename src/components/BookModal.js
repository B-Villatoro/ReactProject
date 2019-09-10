"use strict"

import React from 'react';
// import PropTypes from 'prop-types';
// import BookActions from "../actions/bookActions";
import { Modal, Button, Form } from "react-bootstrap"

export class BookModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    handleClose() {
        this.setState({ show: false })
        console.log(this.state.show);
    }
    handleShow() {
        this.setState({ show: true })
        console.log(this.state.show);
    }

    render() {
        return (
            <div>
                <Button variant="primary" onClick={() => this.handleShow()}>
                    Add new book
                </Button>

                <Modal animation={false} show={this.state.show} onHide={()=>this.handleClose()}>
                    
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Book</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBookId">
                                    <Form.Label>Book Id</Form.Label>
                                    <Form.Control type="text" placeholder="Enter book id" />
                                </Form.Group>

                                <Form.Group controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title" />
                                </Form.Group>
                                
                                <Form.Group controlId="formAuthorId">
                                    <Form.Label>Author Id</Form.Label>
                                    <Form.Control type="text" placeholder="Enter author id" />
                                </Form.Group>

                                <Form.Group controlId="formPublisherId">
                                    <Form.Label>Publisher Id</Form.Label>
                                    <Form.Control type="text" placeholder="Enter publisher id" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
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




