import React, { Component } from 'react';
import { Form } from "react-bootstrap";
export default class CandidateList extends Component {

    render() {
        return (<div className="row">
                <div className="mb-3">
                  <Form.Check.Label>Less than 3
                  <Form.Check aria-label="option 1" />
                  </Form.Check.Label>
                </div>
                <div className="col-md-4">
                    <label>Position
               <select className="form-control" value={this.props.position} onChange={this.props.handleSortChange}>
                            <option value="">Full Stack Developer</option>
                            <option value="lowestprice">Front End Developer</option>
                            <option value="highestprice">Back End Developer</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label> Location
               <select className="form-control" value={this.props.location} onChange={this.props.handleSizeChange}>
                            <option value="">Dubai</option>
                            <option value="x">Abu Dhabi</option>
                            <option value="s">Sharjah</option>
                        </select>
                    </label>
                </div>
            </div>)
    }
}