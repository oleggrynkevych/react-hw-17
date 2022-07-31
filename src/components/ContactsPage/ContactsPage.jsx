import React, {useState, useEffect} from 'react';
import './ContactsPage.css';
import Contact from './Contact';
import {contacts} from './Contacts';

export default function ContactsPage(){
    const [contactList, setContactList] = useState(contacts);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
		setContactList(filteredContacts());
	}, [searchText])

    const filteredContacts = () => {
        return contacts.filter(contact => `${contact.firstName} ${contact.lastName} ${contact.phone}`.toLowerCase().includes(searchText));
    }

    return(
        <div className="wrapper">
        <input
            type='text'
            placeholder='Search...'
            className='search-input'
            onChange={(event) => setSearchText(event.target.value.toLowerCase())}
            value={searchText}
        />

        {contactList.map((contact, index) => { return <Contact contact={contact} key={index} /> })}

        </div>
    );
}
