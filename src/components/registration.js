import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "../css/registrationStyle.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        dob: moment(),
        email: "",
        password: ""
      }
    };
  }
  handleChange = e => {
    const { id, value } = e.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [id]: value
      }
    });
  };
  changeDate = date => {
    this.setState({ dob: date });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user } = this.state;
    console.log(user);
    this.props.add(user);
    this.setState(
      (user: {
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        password: ""
      })
    );
  };

  render() {
    let { dob } = this.state;
    {
      console.log(dob);
    }
    return (
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="regApp">
            <h2>Registration Page</h2>
            <br />
            <br />
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={this.state.firstName}
                id="firstName"
                onChange={this.handleChange}
                required
                minLength={3}
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={this.state.lastName}
                id="lastName"
                onChange={this.handleChange}
                required
              />
              <br />
              <DatePicker
                className="form-control"
                selected={this.state.dob}
                onChange={this.changeDate}
                isClearable={true}
                placeholderText="DOB"
                dateFormat="DD/MM/YYYY"
                minDate=""
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={21}
                required
              />
              <br />
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                minLength={5}
                required
              />
              <br />
              <button
                className="btn btn-outline-primary "
                onSubmit={this.handleSubmit}
              >
                Register
              </button>
              &nbsp;&nbsp;&nbsp;
              <Link to="/Login">
                <button className="btn btn-outline-warning">Cancel</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
