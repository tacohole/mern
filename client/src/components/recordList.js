import React, {Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>
        <td>{props.record.person_name}</td>
        <td>{props.record.person_level}</td>
        <td>{props.record.person_position}</td>
        <td>
            <Link to={"/edit" + props.record._id}>Edit</Link> |
            <a 
                href="/"
                oncClick={() => {
                    props.deleteRecord(pros.record._id);
                }}>Delete
            </a>
        </td>      
    </tr>
);

export default class RecordList extends Component {
    constructor(props) {
        super(props);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.state = {records: [] }
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/record/")
            .then((response) => {
                this.setState({records: response.data});
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    deleteRecord(id) {
        axios.delete("http://localhost:5000/" + id).then((response) => {
            console.log(response.data);
        });
        this.setState({record: this.state.records.filter((el) => el._id !== id),
        });
    }

    recordList() {
        return this.state.records.map((currentrecord) => {
            return (
                <Record
                    record={currentrecord}
                    deleteRecord={this.deleteRecord}
                    key={currentrecord._id}
                    />
            );
        });
    }

    render() {
        return(
            <div>
                <h3>Record List</h3>
                <table className="table table-striped" style={{ marginTop:20}}>
                    <thead>
                        <tr>Name</tr>
                        <tr>Position</tr>
                        <tr>Level</tr>
                        <tr>Action</tr>
                    </thead>
                    <tbody>{this.recordList()}</tbody>
                </table>
            </div>
        );
    }
}