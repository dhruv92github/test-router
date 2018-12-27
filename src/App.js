import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/registration';
import UserDetails from './components/userDetails';
import Login from './components/Login';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser,authenticateUser,showUsers} from './actions/userActions';
import './App.css';



class App extends Component {

componentDidMount(){
    this.getUsers();
  }



  getUsers=()=>{
    fetch('http://localhost:4000/users')
    .then(response=> response.json())
    .then(response=>{
      
      this.props.show(response.data)
      console.log(this.props.users)
    }).catch(err=> console.error(err));
  }




  render() {
    return (
     
      <Router>
       <div className="container" >
        <br/>

        <nav className="navbar navbar-expand-sm " >
          <ul className="navbar-nav" >
            <li className="navbar-item">
              <Link className="nav-link" to='/'> Home</Link>

            </li>
            <li className="navbar-item">
              <Link className="nav-link" to='/Login'> Login</Link>

            </li>
            <li className="navbar-item">
             <Link className="nav-link" to='/Registration'> Registration</Link>

            </li>
            <li className="navbar-item">
              <Link className="nav-link" to='/UserDetails'> User Details</Link>

            </li>

          </ul>

        </nav>
          


           
          <br />
            <Route path='/Login'  component={(props)=><Login users={this.props.users} authenticate={this.props.authenticate} />}  />
            <Route path='/Registration' component={(props)=> <Registration add={this.props.add} />}  />
            <Route path='/UserDetails'  component={(props)=> <UserDetails show={this.props.show} users={this.props.users} />}  />
            <Route path='/' exact={true} component={Home}  />


         
        </div>
      </Router>
        
     
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    users:state.userReducer
  }

}


const mapDispatchToProps=(dispatch)=>{
    return ({
      add:bindActionCreators(addUser,dispatch),
      authenticate:bindActionCreators(authenticateUser,dispatch),
      show:bindActionCreators(showUsers,dispatch)
    })

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
