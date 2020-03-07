import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, Button, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import EditCandidate from "./components/edit-candidate.component";
import CandidateList from "./components/candidate-list.component";
import CreateCandidate from './components/create-candidate.component';

function App() { 
  return (<Router> 
    <div className="App">
      <header className="App-header">
       <Navbar bg="dark" variant="dark">
         <Container>
           <Navbar.Brand>
              <Link to={"/candidate-list"} className="nav-link">
                React MERN Stack App
              </Link>
           </Navbar.Brand>

           <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-candidate"} className="nav-link">
                  Create Candidate
              </Link>
            </Nav>
            <Nav>
              <Link to={"/candidate-list"} className="nav-link">
                Candidate List
              </Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
            </Nav>
         </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateCandidate} />
                <Route path="/create-candidate" component={CreateCandidate} />
                <Route path="/edit-candidate/:id" component={EditCandidate} />
                <Route path="/candidate-list" component={CandidateList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  );
}

export default App;
