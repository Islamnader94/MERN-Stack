import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CandidateTableRow from './CandidateTableRow';
import Filter from './filter.component';

export default class CandidateList extends Component {
  constructor(props){
    super(props)
    this.state = {
      filter: "",
      candidates: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/candidate')
    .then(res => {
      this.setState({
        candidates: res.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  DataTable() {
    return this.state.candidates.map((res, i) => {
      return <CandidateTableRow obj={res} key={i} />;
    });
  }

  render() {
    const { filter, candidates } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = candidates.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    return (<div className="table-wrapper">
      <Filter></Filter>
      <Table striped bordered hover>
      <thead>
          <tr>
            <th>Picture</th>
            <th>Full Name</th>
            <th>Position</th>
            <th>Location</th>
            <th>Years of Experience</th>
            <th>More Actions</th>
          </tr>
      </thead>
      <tbody>
        {this.DataTable()}
      </tbody>
      </Table>
    </div>);
  }
}