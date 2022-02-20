import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormControl from "react-bootstrap/esm/FormControl";
import FormLabel from "react-bootstrap/esm/FormLabel";
export default class create extends  Component{
    constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeRollno = this.onChangeRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            rollno: ''
          }
        }
    
        onChangeName(e) {
            this.setState({name: e.target.value})
          }
        
          onChangeEmail(e) {
            this.setState({email: e.target.value})
          }
        
          onChangeRollno(e) {
            this.setState({rollno: e.target.value})
          }
          onSubmit(e) {
            e.preventDefault()
        
            console.log(`User successfully created!`);
            console.log(`Name: ${this.state.name}`);
            console.log(`Email: ${this.state.email}`);
            console.log(`Roll no: ${this.state.rollno}`);
        
            this.setState({name: '', email: '', rollno: ''})
          }


    render(){
        return(
            <div class="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup controlId="Name">
                        <FormLabel>Name</FormLabel>
                        <FormControl type="text"/>
                    </FormGroup>

                    <FormGroup controlId="Email">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email"/>
                    </FormGroup>

                    <FormGroup controlId="Rollno">
                        <FormLabel>Roll No</FormLabel>
                        <FormControl type="text"/>
                    </FormGroup>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Create Student
                    </Button>
                    </Form>
                    </div>
        );

    }
}