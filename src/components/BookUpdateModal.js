"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import BookActions from '../actions/bookActions';
import {Modal, Button, Form } from "react-bootstrap"


export class BookUpdateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: ""
        }
    }

    _handleClose() {
        this.setState({show:false})
    }

    _handleShow(){
        this.setState({show:true})
        console.log(this.props.bookId)
    }

    _handleForm(e){
        this.setState({[e.target.name]:e.target.value});
    }

    _handleClick(){
        let book ={
            bookId: this.props.bookId,
            title: this.state.title
        }
        console.log(book);
        BookActions.updateBook(book);
        this._handleClose();
    }

    render(){
        return(
            <div>
            <Button variant="primary" onClick={() => this._handleShow()}>
                Update
            </Button>

            <Modal animation={false} show={this.state.show} onHide={()=>this._handleClose()}>
                
                    <Modal.Header closeButton>
                        <Modal.Title>Update Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                            <Form.Group controlId="formName">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control name = "title" onChange={(e)=>this._handleForm(e)}  type="text" placeholder="Enter New Book Title"/>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick ={() => this._handleClick()}>
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
            </Modal>
        </div>
    );
    }
}

BookUpdateModal.propTypes = {
    bookId: PropTypes.number.isRequired
}