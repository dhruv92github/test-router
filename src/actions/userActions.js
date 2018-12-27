import {ADD_USER,AUTHENTICATE_USER,SHOW_USER} from './actionTypes';
let nextUserId=120;

export const addUser=(data)=>{
	console.log(data);
 	return{
 		type:ADD_USER,
 		userId:nextUserId++,
 		data

 	}

}

export const authenticateUser=(username,password)=>{
	return {
		type:AUTHENTICATE_USER,
		username,
		password

	}
}
export const showUsers=(data)=>{
 	return{
 		type:SHOW_USER,
 		data
 	}

}

