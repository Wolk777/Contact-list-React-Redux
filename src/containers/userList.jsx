import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addUser, removeUser, searchUser } from '../actions/actionCreator';

import List from '../components/list/List';
import SearchField from '../components/searchfield/SearchField';
import Form from '../components/form/Form';


class UserList extends Component {
  state={
    nameText:'',
    phoneText:'',
    photoUrl:'',
    searchText:'',
  }

  handleNameChange = ({ target: { value } }) => {
    this.setState({
      nameText:value,
    })
  }  

  handlePhoneChange = ({ target: { value } }) => {
    this.setState({
      phoneText:value,
    })
  }  

  handlePhotoChange = ({ target: { value } }) => {
    this.setState({
      photoUrl:value,
    })
  }  

  handleSearchChange = ({ target: { value } }) => {
    this.setState({
      searchText:value,
    })
  }

  addUser = (e) =>{
    e.preventDefault();
    const {nameText, phoneText, photoUrl} = this.state;
    if (nameText === '' || nameText.length < 2 || nameText.length > 15) return;
    if (phoneText === '' || phoneText.length < 10 || phoneText.length > 20) return;
    if (photoUrl === '' || photoUrl.length < 10) return;

    const { addUser, users } = this.props;

    let flag = users.find( user => user.id === phoneText);

    if (!flag) {
      addUser(phoneText.toString(), nameText, phoneText, photoUrl);  
    }

    this.setState({
      nameText:'',
      phoneText:'',
      photoUrl:'',
    })
  }

  searchUser = (e) =>{
    e.preventDefault();
    const {searchText} = this.state;
    const { searchUser, users } = this.props;
    searchUser(users, searchText);
    this.setState({searchText:''});
  }

  render(){
    const {nameText, phoneText, photoUrl, searchText} = this.state;
    const { users, foundUsers, removeUser } = this.props;
    return(
      <div className="container">
        <Form nameText={nameText} 
          phoneText={phoneText} 
          photoUrl={photoUrl} 
          onChangeName={this.handleNameChange} 
          onChangePhone={this.handlePhoneChange} 
          onChangePhoto={this.handlePhotoChange} 
          onAdd={this.addUser}/>
        <SearchField users={users} 
          searchText={searchText} 
          foundUsers={foundUsers}
          onChange={this.handleSearchChange} 
          onSearch={this.searchUser}/>
        <List users={users} onRemove={removeUser}/>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    users: state.users,
    foundUsers: state.foundUsers,
  }
}

const mapDispatchToProps = {
  addUser,
  removeUser,
  searchUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);