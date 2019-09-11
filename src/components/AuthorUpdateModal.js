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
            authorName: props.author.authorName
        }
    }

    _handleClose() {
        this.setState({show:false})
    }

    _handleShow(){
        this.setState({show:true})
    }

    _handleForm(value){
        this.setState({authorName:value});
    }

    _handleClick(){
        this.props.author.authorName = this.state.authorName;
        AuthorActions.updateAuthor(this.props.author);
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
                        <Modal.Title>Update Author</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                            <Form.Group controlId="formName">
                                <Form.Label>Author Name</Form.Label>
                                <Form.Control name = "authorName" onChange={(e)=>this._handleForm(e.target.value)}  type="text" value={this.state.authorName}/>
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
    author: PropTypes.object.isRequired
}