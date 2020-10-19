import React, { Dispatch, SetStateAction } from 'react';
import './PhoneBookForm.css';
import { IContact } from './App';

interface IPhoneBookForm {
  contact: IContact,
  setContact: Dispatch<SetStateAction<IContact>>,
  addContact: () => void
}

function PhoneBookForm({contact, setContact, addContact} : IPhoneBookForm) {
    return (
      <form className='form-container' onSubmit={e => { e.preventDefault() }}>
        <label>First Name:</label>
        <br />
        <input 
          className='form-inputs'
          name='userFirstname' 
          type='text'
          onChange={e => setContact({...contact, first: e.target.value})}
        />
        <br/>
        <label>Last Name:</label>
        <br />
        <input 
          className='form-inputs'
          name='userLastname' 
          type='text' 
          onChange={e => setContact({...contact, last: e.target.value})}
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          className='form-inputs'
          name='userPhone' 
          type='text'
          onChange={e => setContact({...contact, phone: e.target.value})}
        />
        <br/>
        <input 
          className='form-inputs'
          type='submit' 
          value='Add User' 
          onClick={addContact}
        />
      </form>
    )
}

export default PhoneBookForm;