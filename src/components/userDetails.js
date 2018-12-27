import React, { Component } from 'react';
import moment from 'moment';
import	'../css/userDetailsStyle.css';

class UserDetails extends Component{

	

render(){
	let tableHeader=this.props && (this.props.users.length>0) && (<tr>
						<th>User ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>DOB</th>
						<th>Email</th>
						<th>Password</th>

					</tr>)
	let tableData = this.props && this.props.users && this.props.users.map((user)=>{
			return(<tr>	
						<td> {user.userId}</td>
						<td> {user.firstName}</td>
						<td> {user.lastName}</td>
						<td>{moment(user.dob).format("DD-MM-YYYY")}</td>
						<td> {user.email}</td>
						<td> {user.password}</td>
					</tr>
				)

			})

	return(<div>
		<h2>User Details</h2>
			<div className="tableData">
				{console.log(this.props.users)}
				<table className="table table-bordered">
					{tableHeader}
					{tableData}
				</table>
			</div>
		</div>)
	}
}
export default UserDetails;