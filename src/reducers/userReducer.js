import {ADD_USER,AUTHENTICATE_USER,SHOW_USER} from '../actions/actionTypes';


const initialState=[];


export const userReducer=(state=initialState, action)=>{

	switch(action.type){

		case ADD_USER:
			console.log("action data : "+action.data.firstName);
			
		const addNewUser=()=>{


			    const {firstName,lastName,email,password}=action.data;
			    console.log(firstName,lastName,action.data.dob.format("YYYY-MM-DD"),email,password);
				const {userId}=action;
				console.log(userId);
			    fetch(`http://localhost:4000/users/add?user_id=${userId}&first_name=${firstName}&last_name=${lastName}&dob=${action.data.dob.format("YYYY-MM-DD")}&email=${email}&password=${password}`)
			    .then(console.log("inserted successfully"))
			    .catch(err=>console.error(err));
			  }
			addNewUser();
			return[...state,{
					userId:action.userId,
					firstName:action.data.firstName,
					lastName:action.data.lastName,
					dob:action.data.dob,
					email:action.data.email,
					password:action.data.password
				}];

		case AUTHENTICATE_USER:
			console.log("username: "+action.username+" pass "+action.password)
			return( state.map((user,i)=>{
				
										if(user.email===action.username && user.password===action.password)
										{
											
											return Object.assign({}, state[i], {loggedIn:true});
											console.log(state);

										}
										else
											return false;
										}
					))

			case SHOW_USER:
			console.log(action.data);
			

			let userData= action.data.map((users,i)=>{
					return Object.assign({},state,{
						userId:action.data[i].user_id,
						firstName:action.data[i].first_name,
						lastName:action.data[i].last_name,
						dob:action.data[i].dob,
						email:action.data[i].email,
						password:action.data[i].password
					})
			});
					return userData;
					

		default:
			return state;


	}

}
export default userReducer;