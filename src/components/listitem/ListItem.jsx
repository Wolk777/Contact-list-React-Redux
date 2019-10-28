import React from 'react';
import PropTypes from 'prop-types';

import './ListItem.css';

const ListItem = ({ name, phoneNumber, id, onRemove }) => (
	<li>
		<i className="fas fa-user-secret"></i>
		<span> {name}, Tel: {phoneNumber}</span>
		<i className="fas fa-times" onClick={() => onRemove(id)}/>
	</li>
)

ListItem.propTypes = {
  name: PropTypes.string,
  phoneNumber: PropTypes.string,
  id: PropTypes.string,
  onRemove: PropTypes.func,
}

ListItem.defaultProps = {
  name: '',
  phoneNumber: '',
  id: '0',
  onRemove: () => {},
}

export default ListItem;