import React, { useState } from 'react';
import InformationTable from './InformationTable';
import PhoneBookForm from './PhoneBookForm';
import './App.css';

export interface IContact {
  first: string,
  last: string,
  phone: string
}

function App() {
  const [names, setNames] = useState<Array<IContact>>([]);
  const [contact, setContact] = useState<IContact>({
    first: '',
    last: '',
    phone: ''
  });

  const addContact = () => {
    console.log('contact', contact);
    setNames(names => [...names, contact])
    console.log('phonebook', names);
  }

  return (
    <section>
      <PhoneBookForm contact={contact} setContact={setContact} addContact={addContact} />
      <InformationTable list={names} />
    </section>
  );
}

export default App;
