"use strict"

import React from 'react';
import AuthorActions from '../actions/authorActions';
import {Modal, Button, Form } from "react-bootstrap"

export class AuthorModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            authorId: "",
            authorName: ""
        }
    }

    _handleClose() {
        this.setState({show:false})
    }

    _handleShow(){
        this.setState({show:true})
    }

    _handleForm(e){
        this.setState({[e.target.name]:e.target.value});
    }

    _handleClick(){
        let author ={
            authorId: this.state.authorId,
            authorName: this.state.authorName
        }
        AuthorActions.addAuthor(author);
        this._handleClose();
    }

    render(){
        return(
            <div>
            <Button variant="primary" onClick={() => this._handleShow()}>
                Add New Author
            </Button>

            <Modal animation={false} show={this.state.show} onHide={()=>this._handleClose()}>
                
                    <Modal.Header closeButton>
                        <Modal.Title>Update Author</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formAuthorId">
                                <Form.Label>Author Id</Form.Label>
                                <Form.Control name= "authorId" onChange={(e)=>this._handleForm(e)} type="text" placeholder="Enter Author Id"/>
                            </Form.Group>

                            <Form.Group controlId="formName">
                                <Form.Label>AuthorName</Form.Label>
                                <Form.Control name = "authorName" onChange={(e)=>this._handleForm(e)}  type="text" placeholder="Enter Author Name"/>
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
