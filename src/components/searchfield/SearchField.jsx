import React from 'react';
import PropTypes from 'prop-types'
import './SearchField.css'

const SearchField = ({searchText, users, foundUsers, onChange, onSearch}) => {
  return(
    <div className="containerSearch">
      <div>
        <input 
          type="text" 
          name="search" 
          className="inputSearch"
          value={searchText} 
          onChange={onChange}
          placeholder="Enter name to search"/>
        <button className="BtnSearch" onClick={onSearch}>Search</button>
      </div>
      {foundUsers.length !== 0 && foundUsers.map( ({name, phoneNumber, id}) =>
      <p key={id}><i className="fas fa-user"></i> {name}, Tel: {phoneNumber}</p>)}
    </div>
  ); 
}

SearchField.propTypes = {
  searchText:PropTypes.string,
  users:PropTypes.array,
  foundUsers:PropTypes.array,
  onChange:PropTypes.func,
  onSearch:PropTypes.func,
}

SearchField.defaultProps = {
  searchText:'',
  users:[],
  foundUsers:[],
  onChange: () => {},
  onSearch: () => {},
}

export default SearchField