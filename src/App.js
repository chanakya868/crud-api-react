import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Component } from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import create from "./components/create.component";
import Edit from "./components/edit.component";
import user from "./components/user.component";


export default class App extends Component{
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
          "https://gorest.co.in/public-api/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
          }
          App() {
            return (<Router>
             <div className="App">
                <header className="App-header">
                  <Navbar bg="dark" variant="dark">
                    <Container>
          
                      <Navbar.Brand>
                        <Link to={"/create"} className="nav-link">
                          React MERN Stack App
                        </Link>
                      </Navbar.Brand>
          
                      <Nav className="justify-content-end">
                        <Nav>
                          <Link to={"/create"} className="nav-link">
                            Create user
                          </Link>
                        </Nav>
          
                        {/* <Nav>
                          <Link to={"/edit-student/:id"} className="nav-link">
                            Edit Student
                          </Link>
                        </Nav> */}
          
                        <Nav>
                          <Link to={"/user"} className="nav-link">
                            User 
                          </Link>
                        </Nav>
                      </Nav>
          
                    </Container>
                  </Navbar>
                </header>
          
                <Container>
                  <Row>
                    <Col md={12}>
                      <div className="wrapper">
                        <Routes>
                          <Route exact path='/' component={create} />
                          <Route path="/create" component={create} />
                          <Route path="/edit:id" component={Edit} />
                          <Route path="/user" component={user} />
                        </Routes>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
          
              </Router>
            );
          }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    User_Name: { item.username }, 
                    Full_Name: { item.name }, 
                    User_Email: { item.email } 
                    </ol>
                ))
            }
        </div>
    );
}}