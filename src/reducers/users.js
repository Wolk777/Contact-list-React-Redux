import { ADD_USER, REMOVE_USER } from '../constans';

const USERS = [
  {
    id:"375-25-531-93-75",
    name:"Vlad",
    phoneNumber:"375-25-531-93-75",
    imgUrl: "www.React.ru"
  },
    {
    id:"375-25-531-93-76",
    name:"Lena",
    phoneNumber:"375-25-531-93-76",
    imgUrl: "www.Redux.by"
  },
];

const users = (state = USERS, {type, payload}) => {
	switch (type) {
		case ADD_USER:
			return[
				...state, {
					id:payload.id,
					name:payload.name,
					phoneNumber:payload.phoneNumber,
					imgUrl:payload,
				}
			];
		case REMOVE_USER:
			return (
				[...state].filter(user => user.id !==  payload.id)
			);
		default:
			return state;
	}
}

export default users;

