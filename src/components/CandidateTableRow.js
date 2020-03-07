import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';

export default class CandidateTableRow extends Component {
    render() {
        return (
            <tr>
                <td><img src={`pictures/${this.props.obj.picture}.jpg`}/></td>
                <td>{this.props.obj.full_name}</td>
                <td>{this.props.obj.position}</td>
                <td>{this.props.obj.location}</td>
                <td>{this.props.obj.years_exp}</td>
                <td>
                    <Link className="edit-link" to={"/edit-candidate/" + this.props.obj._id}>
                        Edit
                    </Link>
                    {/* <Button size="sm" variant="danger">Delete</Button> */}
                </td>
            </tr>
        );
    }
}