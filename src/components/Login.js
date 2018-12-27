import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";
import "../css/loginStyle.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    this.props.authenticate(username, password);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    const { username, password, submitted } = this.state;
    const a =
      this.props.users[0] && this.props.users[0].loggedIn ? (
        <Dashboard />
      ) : (
        <div className="row justify-content-md-center">
          <div className="col-sm-4 ">
            <div className="loginApp">
              <h2>Login Page</h2>
              <br />
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username/Email"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                  />
                  <br />

                  {submitted && !username && <div>Please enter username </div>}

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    minLength={5}
                    required
                  />
                  <br />

                  {submitted && !password && <div>Please enter password </div>}

                  <button
                    type="submit"
                    className="btn btn-primary justify-content-md-center"
                  >
                    Login
                  </button>
                </div>
              </form>

              <p className="reg">
                New user?
                <Link to="/registration">
                  <button className="btn btn-warning">Register yourself</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      );

    return <div>{a}</div>;
  }
}
export default Login;
