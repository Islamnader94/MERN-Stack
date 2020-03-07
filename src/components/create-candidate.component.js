import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

export default class CreateCandidate extends Component {
  constructor(props) {
      super(props)
      this.onChangeCandidateName = this.onChangeCandidateName.bind(this);
      this.onChangeCandidatePicture = this.onChangeCandidatePicture.bind(this);
      this.onChangeCandidatePosition = this.onChangeCandidatePosition.bind(this);
      this.onChangeCandidateLocation = this.onChangeCandidateLocation.bind(this);
      this.onChangeCandidateExperience = this.onChangeCandidateExperience.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          full_name:'',
          picture:'',
          position:'',
          location:'',
          years_exp:''
      }
    }

    onChangeCandidateName(e) {
        this.setState({full_name: e.target.value});
    }

    onChangeCandidatePicture(e) {
        this.setState({picture: e.target.value});
    }
    onChangeCandidatePosition(e) {
        this.setState({position: e.target.value});
    }

    onChangeCandidateLocation(e) {
        this.setState({location: e.target.value});
    }

    onChangeCandidateExperience(e) {
        this.setState({years_exp: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault()

        const candidateObject = {
            full_name: this.state.full_name,
            picture: this.state.picture,
            location: this.state.location,
            position: this.state.position,
            years_exp: this.state.years_exp
        };
        axios.post('http://localhost:4000/candidate/create-candidate', candidateObject)
          .then(res => console.log(res.data));
    
        this.setState({full_name: '', picture: '', position: '', location: '', years_exp: ''})
    }

  render() {
    return (
        <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Picture">
                <Form.Label>Picture</Form.Label>
                <Form.Control type="text" value={this.setState.picture} onChange={this.onChangeCandidatePicture}/>
            </Form.Group>
            <Form.Group controlId="Name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" value={this.setState.full_name} onChange={this.onChangeCandidateName}/>
            </Form.Group>
            <Form.Group controlId="Position">
                <Form.Label>Position</Form.Label>
                <Form.Control type="text" value={this.setState.position} onChange={this.onChangeCandidatePosition}/>
            </Form.Group>
            <Form.Group controlId="Location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" value={this.setState.location} onChange={this.onChangeCandidateLocation}/>
            </Form.Group>
            <Form.Group controlId="Experience">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" value={this.setState.years_exp} onChange={this.onChangeCandidateExperience}/>
            </Form.Group>
            <Button variant="danger" size="lg" block="block" type="submit">
               Create Candidate
            </Button>
        </Form>
    );
  }
}