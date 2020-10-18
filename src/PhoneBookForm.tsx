import React, { useState } from 'react';
import './PhoneBookForm.css';

function PhoneBookForm() {
    const [names, setNames] = useState([]);
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [phone, setPhone] = useState('');
  
    const onClick = (e: any) => {
      let json = {
        'first': first,
        'last': last,
        'phone': phone
      }
  
      //setNames([...names, json]);
      sortNames();
      // names.map((x, index) => {
      //   <tr>
      //     {displayNames(x)}
      //   </tr>
      // })
    }
  
    // sort by last name
    const sortNames = () => {
      // names.sort((a: any, b: any) => {
      //   a.last - b.last
      // })
    }
  
    return (
  
      <form className='form-container' onSubmit={e => { e.preventDefault() }}>
        <label>First Name:</label>
        <br />
        <input 
          className='form-inputs'
          name='userFirstname' 
          type='text'
          onChange={e => setFirst(e.target.value)}
        />
        <br/>
        <label>Last Name:</label>
        <br />
        <input 
          className='form-inputs'
          name='userLastname' 
          type='text' 
          onChange={e => setLast(e.target.value)}
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          className='form-inputs'
          name='userPhone' 
          type='text'
          onChange={e => setPhone(e.target.value)}
        />
        <br/>
        <input 
          className='form-inputs'
          type='submit' 
          value='Add User' 
          onClick={onClick}
        />
      </form>
    )
}

export default PhoneBookForm;