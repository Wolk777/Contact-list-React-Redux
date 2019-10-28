import { ADD_USER, REMOVE_USER, SEARCH_USER } from '../constans'

export const addUser = (id, name, phoneNumber, imgUrl) => ({
	type:ADD_USER,
	payload:{
		id,
		name,
		phoneNumber,
		imgUrl,		
	}
})

export const removeUser = id => ({
	type:REMOVE_USER,
	payload:{id},
})

export const searchUser = (users, name) => ({
	type:SEARCH_USER,
	payload:{
		users,
		name
	},
})