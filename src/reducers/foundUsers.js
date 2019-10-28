import { SEARCH_USER, REMOVE_USER } from '../constans';

const foundUsers = (state=[], {type, payload}) => {
	switch (type) {
		case SEARCH_USER:
			return(
				[...payload.users].filter(user => user.name ===  payload.name)
			);
		case REMOVE_USER:
			return (
				[...state].filter(user => user.id !==  payload.id)
			)			
		default:
			return state;
	}
}

export default foundUsers;