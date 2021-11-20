import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonPosition = this.onChangePersonPosition.bind(this);
        this.onChangePersonLevel = this.onChangePersonLevel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: "",
            person_position: "",
            person_level: "",
        };
    }

    onChangePersonName(e) {
        this.setState({
            person_name: e.target.value,
        });
    };

    onChangePersonLevel(e) {
        this.setState({
            person_level: e.target.value,
        });
    };

    onChangePersonPosition(e) {
        this.setState({
            person_position: e.target.value,
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const newperson = {
            person_name: this.state.person_name,
            person_level: this.state.person_level,
            person_position: this.state.person_position,
        };

        axios
            .post("http://localhost:5000/record/add", newperson)
            .then((res) => console.log(res.data));

        this.setState({
            person_name: "",
            person_level: "",
            person_position: "",
        });
    }

    render(){
        return(
            <div style={{ marginTop:20 }}>
                <h3>Create New Record</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name of the Person</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.person_name}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Position of the Person</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.person_position}
                            onChange={this.onChangePersonPosition}
                        />
                    </div>
                    <div className="form-group">
                        <label>Level of the Person</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.person_level}
                            onChange={this.onChangePersonLevel}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Intern"
                                checked={this.state.person_level === "Intern"}
                                onChange={this.onChangePersonLevel}
                            />
                        <label className="form-check-label">Intern</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Junior"
                                checked={this.state.person_level === "Junior"}
                                onChange={this.onChangePersonLevel}
                            />
                        <label className="form-check-label">Junior</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="Senior"
                                checked={this.state.person_level === "Senior"}
                                onChange={this.onChangePersonLevel}
                            />
                        <label className="form-check-label">Senior</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Create Person"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

