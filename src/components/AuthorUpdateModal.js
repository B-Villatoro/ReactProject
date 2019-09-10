"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import AuthorActions from '../actions/authorActions';
import {Modal, Button, Form } from "react-bootstrap"

export class AuthorUpdateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            authorName: ""
        }
    }

    _handleClose() {
        this.setState({show:false})
    }

    _handleShow(){
        this.setState({show:true})
        console.log(this.props.authorId)
    }

    _handleForm(e){
        this.setState({[e.target.name]:e.target.value});
    }

    _handleClick(){
        let author ={
            authorId: this.props.authorId,
            authorName: this.state.authorName
        }
        console.log(author);
        AuthorActions.updateAuthor(author);
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
                        <Modal.Title>Add New Author</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                            <Form.Group controlId="formName">
                                <Form.Label>AuthorName</Form.Label>
                                <Form.Control name = "authorName" onChange={(e)=>this._handleForm(e)}  type="text" placeholder="Enter New Author Name"/>
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

AuthorUpdateModal.propTypes = {
    authorId: PropTypes.number.isRequired
}