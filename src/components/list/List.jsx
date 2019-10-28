import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../listitem/ListItem.jsx';
import './List.css';

const List = ({users, onRemove}) => {
  return(
    <ul className="userList">
      {users.map( ({ name, phoneNumber, id}) => 
        <ListItem key={phoneNumber} 
        name={name} 
        phoneNumber={phoneNumber} 
        id={id} 
        onRemove={onRemove}/>
      )}
    </ul>
  );
}

List.propTypes = {
  users: PropTypes.array,
  onRemove: PropTypes.func,
}

List.defaultProps = {
  users: [],
  onRemove: () => {},
}

export default List